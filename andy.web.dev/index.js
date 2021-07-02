//---------------------- SITE ELEMENTS ---------------------
var express = require('express');
var socket = require('socket.io');
var sha3_512 = require('js-sha3').sha3_512;
var mysql = require('mysql');
var jwt = require('jsonwebtoken');
var fs = require('fs');
var path = require('path');
var cwd = __dirname;
var cors = require('cors')
var date = require('date-and-time');

//---------------------- MYSQL CONNECTION ---------------------
var con_config = {
    host: '',
    user: '',
    password: '',
    database: ''
};
var con;
process.on('uncaughtException', function (err) {console.error(err);console.log("MYSQL Reconnecting");});
function handleMYSQLDisconnect() {
	con = mysql.createConnection(con_config);
	con.connect(function(err) { if(err) { console.log('[SYSTEM] - [MYSQLi] '+err);setTimeout( handleMYSQLDisconnect, 2000); } else {console.log('[SYSTEM] - [MYSQLi] Connection Established.')} });
	con.on('error', function(err) { console.log('con error', err); if(err.code === 'PROTOCOL_CONNECTION_LOST') { handleMYSQLDisconnect(); } else { throw err; } });
}
handleMYSQLDisconnect();

//---------------------- EXPRESS SERVER ---------------------
var app = express();
var server = app.listen(8080, function() {
    console.log('=====================================')
    console.log(`Online - http://localhost:8080`)
    console.log('=====================================')
});

app.use(cors());
app.use(express.json());
app.use(express.static('app'));
app.use(express.urlencoded({limit: '200mb', extended: true}));
app.use(express.text({ limit: '200mb' }));



// PUBLIC PAGES
app.route('/').get(function(req, res) { res.sendFile(cwd+"/app/index.html") });

// AUTHENTICATIONS
app.route('/login').get(function(req, res) { res.sendFile(cwd+"/app/login.html") });
app.route('/logout').get(function(req, res) { res.sendFile(cwd+"/app/logout.html") });
app.route('/register').get(function(req, res) { res.sendFile(cwd+"/app/register.html") });

// MEMBER AREA & MEMBER PAGES
app.route('/member').get(function(req, res) { res.sendFile(cwd+"/app/member.html") });

// MANAGEMENT
app.route('/management').get(function(req, res) { res.sendFile(cwd+"/app/management.html") });
app.route('/management/discord').get(function(req, res) { res.sendFile(cwd+"/app/m.discord.html") });
// /management/settings

// REDIRECTS
app.route('/twitch').get(function(req, res) { res.statusCode = 302; res.setHeader("Location", ""); res.end(); });
app.route('/youtube').get(function(req, res) { res.redirect('') });
app.route('/discord').get(function(req, res) { res.redirect('') });
app.route('/instagram').get(function(req, res) { res.statusCode = 302; res.setHeader("Location", ""); res.end(); });
app.route('/twitter').get(function(req, res) { res.redirect('') });

// ERROR & CODES
app.route('/403').get(function(req, res) { res.sendFile(cwd+"/app/403.html") });
app.route('/404').get(function(req, res) { res.sendFile(cwd+"/app/404.html") });
app.route('/*/').get(function(req, res) { res.sendFile(cwd+"/app/404.html") });

// --------------------- SCOTTY -------------------------
var Discord = require('discord.js');
var client = new Discord.Client();
var discord_config = require('./scotty/config/config.js');
var fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./scotty/cmds/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require('./scotty/cmds/' + `${file}`);
    client.commands.set(command.name, command); 
    console.log('Command Loaded: ' + discord_config.BotPrefix + command.name);
}

var event1 = require('./scotty/events/ClientOnceReady.js');
event1.Start(client);
var event2 = require('./scotty/events/GuildMember.js');
event2.Add(client);
event2.Remove(client);
var event3 = require('./scotty/events/Message.js');
event3.Message(client);
event3.Delete(client);
// var event4 = require('./scotty/events/GuildChannel.js');
// event4.Create(client);
// event4.Delete(client);
// event4.Update(client);
var event5 = require('./scotty/events/GuildBan.js');
event5.Add(client);
event5.Remove(client);
var event6 = require('./scotty/events/GuildRole.js');
event6.Create(client);
event6.Delete(client);

// ------------ ERROR & AUTH ----------------
client.on('error', console.error);
client.login(discord_config.BotToken);



//---------------------- SOCKET SERVER ---------------------
var io = socket(server);

//---------------------- SOCKET CONNECTIONS ---------------------
io.on('connection', (socket) => { 
    
    socket.on('', function(data) { });
    socket.emit('', { });
    
    socket.on('auth.login', function(data){
        let sql = `SELECT * FROM users WHERE email = '${data.email}'`;
        let query = con.query(sql, (err, result, fields) => {
            if(result){
                // console.log('here ' + result)
                if (result.length > 0) {
                    if(data.pass == result[0].password){
                        jwt.sign({id:result[0].id}, result[0].sk,{ expiresIn: '20hrs' }, (err, token) => {
                            let sql2 = `SELECT * FROM group_members WHERE user_id = '${result[0].id}' LIMIT 1`;
                            let query2 = con.query(sql2, (err2, result2, fields2) => {
                                // console.log('here2 ' + err2)
                                if(result2.length > 0){
                                    let sql3 = `SELECT * FROM group_permissions WHERE group_id = '${result2[0].group_id}'`;
                                    let query3 = con.query(sql3, (err3, result3, fields3) => {
                                        console.log('here3 ' + result3)
                                        // console.log('success')
                                        socket.emit('auth.login.responce', {
                                            token:token,
                                            secretkey:result[0].sk,
                                            response:'success',
                                            permissions:result3
                                        });
                                    });
                                } else {
                                    socket.emit('auth.login.responce', {
                                        response:'error',
                                        message:'Account has not been assigned a security group.'
                                    });
                                }
                            });
                        }); 
                    } else {
                        socket.emit('auth.login.responce', {
                            response:'error',
                            message:'Email or Password is incorrect!'
                        });
                    }
                } else {
                    socket.emit('auth.login.responce', {
                        response:'error',
                        message:'Email or Password is incorrect!'
                    });
                }
            } else {
                socket.emit('auth.login.responce', {
                    response:'error',
                    message:'Email or Password is incorrect!'
                });
            }
        });
    });

    socket.on('auth.check', function(data){
        if(data.token && data.secretkey){
            jwt.verify(data.token, data.secretkey, function(err, data2) {
                if(!data2){
                    socket.emit('auth.check.logout', {});
                }
            });
        }
    });

    socket.on('account.get.data', function(data){
        jwt.verify(data.token, data.secretkey, function(err, data2) {
            if(data2) {
                let sql = `SELECT * FROM users WHERE id = '${data2.id}' LIMIT 1`;
                let query = con.query(sql, (err, result, fields) => {
                    socket.emit('account.recieve.data', {
                        id:result[0].id,
                        display_name:result[0].display_name,
                        identifier:result[0].identifier,
                        avatar_url:result[0].avatar_url,
                    });
                });
            }
        });
    });

    socket.on('member.experiment', function(data){
        if(data.token && data.secretkey) {
            jwt.verify(data.token, data.secretkey, function(err, data2) {
                if(data2) {
                    let sql = `SELECT * FROM users WHERE id = '${data2.id}' LIMIT 1`;
                    let query = con.query(sql, (err, result, fields) => {
                        let this_code = Math.floor(Math.random()*90000) + 10000;
                        let discord_sent = '';
                        let code = data.code;
                        let discord_user = client.users.cache.get(data.user)
                        if(discord_user) { discord_user.send('Here is your code ;) ' + '```' + code + '```') }
                        socket.emit('member.experiment.sent', {});
                        socket.emit('member.experiment.sent2', {
                            code:this_code
                        });
                    });
                }
            });
        }
    });









    // MANAGEMENT PANEL SOCKETS
    socket.on('m.discord.get.info', function(data) {
        if(data.token && data.secretkey) {
            jwt.verify(data.token, data.secretkey, function(err, data2) {
                if(data2) {

                    // USERS & BOTS
                    var scotty_users = [];
                    var scotty_bots = [];
                    let users = JSON.stringify(client.users.cache);
                    users = JSON.parse(users);
                    users.forEach(function(data) {
                        if(data.bot == false) {
                            scotty_users.push(data)
                        }
                        if(data.bot == true) {
                            scotty_bots.push(data)
                        }
                    });

                    // CHANNELS
                    var main_guild = client.guilds.cache.get('809274984559149076');
                    var scotty_channels = [];
                    let channels = main_guild.channels.cache;
                    channels.forEach(function(data) {
                        scotty_channels.push(data)
                    });

                    // ROLES
                    var scotty_roles = [];
                    let roles = main_guild.roles.cache;
                    roles.forEach(function(data) {
                        scotty_roles.push(data)
                    });

                    socket.emit('m.discord.recieve.info', {
                        users:scotty_users,
                        bots:scotty_bots,
                        channels:scotty_channels,
                        roles:scotty_roles,
                    });

                }
            })
        }
    });





    // END OF SOCKETS
});
