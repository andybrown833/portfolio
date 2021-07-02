//---------------------- CONSTS / GLOBAL VARS ----------------------
var express = require('express');
var socket = require('socket.io');
var sha3_512 = require('js-sha3').sha3_512;
var mysql = require('mysql');
var jwt = require('jsonwebtoken');
var fs = require('fs');
var path = require('path');
var cwd = __dirname;
var date = require('date-and-time');
var cors = require('cors');

//---------------------- EXPRESS SETUP ----------------------
if(fs.existsSync('D:\\crp.websites\\le_key.key')) {
    var http = express();
    http.get('*', function(req, res) {  
        res.redirect('https://' + req.headers.host + req.url);
    })
    http.listen(80, '[IP]');
    var app = express();
    var https = require('https');
    var server = https.createServer({
        key: fs.readFileSync('D:\\crp.websites\\le_key.key'),
        cert: fs.readFileSync('D:\\crp.websites\\le_cert.crt'),
       	ca: fs.readFileSync('D:\\crp.websites\\le_ca.crt'),
        requestCert: false,
        rejectUnauthorized: false
    }, app);
    
    server.listen(443, '[IP]');
} else {
    var app = express();
    var server = app.listen(80, function() {
        console.log('=====================================')
        console.log(`Online - http://localhost:80`)
        console.log('=====================================')
    });
}


//---------------------- ROUTES ----------------------
app.use(express.static('app'));
app.route('/').get(function(req, res) { res.sendFile(cwd+"/app/index.html"); }); 

// PUBLIC PAGES
// /dept/publicsafety
// /dept/dispatch
// /dept/citizens
// /rules
app.route('/about').get(function(req, res) { res.sendFile(cwd+"/app/about.html"); });

// AUTHENTICATION
app.route('/login').get(function(req, res) { res.sendFile(cwd+"/app/a.login.html"); });
app.route('/register').get(function(req, res) { res.sendFile(cwd+"/app/a.register.html"); });
// app.route('/forgot').get(function(req, res) { res.sendFile(cwd+"/app/a.forgot.html"); });
app.route('/logout').get(function(req, res) { res.sendFile(cwd+"/app/a.logout.html"); });
// app.route('/login').get(function(req, res) { res.statusCode = 302; res.setHeader("Location", ""); res.end(); });

// app.route('/login').get(function(req, res) { res.sendFile(cwd+"/app/logout.html"); });
// app.route('/gauth').get(function(req, res) { res.sendFile(cwd+"/app/gauth.html"); });
// app.route('/logout').get(function(req, res) { res.sendFile(cwd+"/app/logout.html"); });

// APPLICATION CENTER
app.route('/app').get(function(req, res) { res.sendFile(cwd+"/app/app-info.html"); });
app.route('/apply').get(function(req, res) { res.sendFile(cwd+"/app/app-info.html"); });
app.route('/app/new').get(function(req, res) { res.sendFile(cwd+"/app/app-new.html"); });
app.route('/app/view').get(function(req, res) { res.sendFile(cwd+"/app/app-view.html"); });
app.route('/app/manage').get(function(req, res) { res.sendFile(cwd+"/app/app-manage.html"); });
app.route('/app/manage/view').get(function(req, res) { res.sendFile(cwd+"/app/app-manage-view.html"); });

// APPLICANT & GUEST ACCESS
// app.route('/app').get(function(req, res) { res.sendFile(cwd+"/app/app.html"); });
app.route('/profile').get(function(req, res) { res.sendFile(cwd+"/app/p.profile.html"); });
app.route('/profile/settings').get(function(req, res) { res.sendFile(cwd+"/app/p.settings.html"); });

// REDIRECTS
// 
app.route('/discord/link/resources').get(function(req, res) { res.statusCode = 302; res.setHeader("Location", ""); res.end(); });
app.route('/hype').get(function(req, res) { res.statusCode = 302; res.setHeader("Location", ""); res.end(); });
app.route('/handbook').get(function(req, res) { res.statusCode = 302; res.setHeader("Location", ""); res.end(); });

app.route('/403').get(function(req, res) { res.sendFile(cwd+"/app/403.html"); });
app.route('/404').get(function(req, res) { res.sendFile(cwd+"/app/404.html"); });
app.route('/*/').get(function(req, res) { res.sendFile(cwd+"/app/404.html"); });


//---------------------- MYSQL ----------------------
var db_config = {
    host: '',
    user: '',
    password: '',
    database: ''
};
var db;
process.on('uncaughtException', function (err) {console.error(err);console.log("MYSQL Reconnecting");});
function handleMYSQLDisconnect() {
	db = mysql.createConnection(db_config);
	db.connect(function(err) {
		if(err) {console.log('[SYSTEM] - [MYSQLi] '+err);setTimeout(handleMYSQLDisconnect, 2000);}else{console.log('[SYSTEM] - [MYSQLi] Connection Established.')}});
	db.on('error', function(err) {
		console.log('db error', err);
		if(err.code === 'PROTOCOL_CONNECTION_LOST') {handleMYSQLDisconnect();} else {throw err;}
	});
}
handleMYSQLDisconnect();

var io = socket(server);
io.on('connection', (socket) => { 

    socket.on('auth.check', function(data){
        if(data.token && data.secretkey){
            jwt.verify(data.token, data.secretkey, function(err, data2) {
                if(!data2){
                    socket.emit('auth.check.logout', {});
                }
            });
        }
    });

    socket.on('auth.login.submit', function(data) {
        let sql = `SELECT * FROM users WHERE email = '${data.email}'`;
        let query = db.query(sql, (err, result, fields) => {
            if(result) {
                if (result.length > 0) {
                    if(data.pass == result[0].password) {
                        jwt.sign({id:result[0].id}, result[0].sk,{ expiresIn: '20hrs' }, (err, token) => {
                            let sql2 = `SELECT * FROM gw_security_groups_members WHERE user_id = '${result[0].id}' LIMIT 1`;
                            let query2 = db.query(sql2, (err2, result2, fields2) => {
                                if(result2.length > 0) {
                                    let sql3 = `SELECT * FROM gw_security_groups_permissions WHERE group_id = '${result2[0].group_id}'`;
                                    let query3 = db.query(sql3, (err3, result3, fields3) => {
                                        socket.emit('auth.login.responce', {
                                            token:token,
                                            key:result[0].sk,
                                            permissions:result3,
                                            response:'success',
                                        });
                                    });
                                } else {
                                    socket.emit('auth.login.responce', {
                                        response:'error',
                                        message:'Account has not been assigned a group please message a member of administration for assistance.'
                                    });
                                }
                                
                            });                                
                        });
                    } else {
                        socket.emit('auth.login.responce', {
                            response:'error',
                            message:'Email or Password is incorrect!1'
                        });
                    }
                } else {
                    socket.emit('auth.login.responce', {
                        response:'error',
                        message:'Email or Password is incorrect!2'
                    });
                }
            } else {
                socket.emit('auth.login.responce', {
                    response:'error',
                    message:'Email or Password is incorrect!3'
                });
            }
        });
    });

    socket.on('auth.registration.submit', function(data) {
        var sk = sha3_512(data.password);

        // CHECK TO SEE IF USER ALREADY HAS ACCOUNT
        let sql = `SELECT * FROM users WHERE email = '${data.email}' LIMIT 1`;
        let query = db.query(sql, (err, result, fields) => {
            if(err) { console.log(err) }

            if(result && result.length == 0) {

                // INSERTS USER INTO DATABSE
                let sql4 = `INSERT INTO users (email, display_name, p_display_name,  password, sk) VALUES ('${data.email}', '${data.name}', '${data.name}', '${data.password}', '${sk}')`;
                let query4 = db.query(sql4, (err4, result4, fields4) => {
                    if(err4) { console.log(err4) }

                    // GETS RECENTLY ADDED USER
                    let sql2 = `SELECT * FROM users WHERE email = '${data.email}' LIMIT 1`;
                    let query2 = db.query(sql2, (err2, result2, fields2) => {
                        if(err2) { console.log(err2) }

                        // ADDS USER TO 'GUEST' GROUP
                        let sql3 = `INSERT INTO gw_security_groups_members (group_id, user_id) VALUES ('11', '${result2[0].id}')`;
                        let query3 = db.query(sql3, (err3, result3, fields3) => {
                            if(err3) { console.log(err3) }

                            socket.emit('auth.registration.responce',{
                                responce: 'success',
                                message: '',
                            });

                        });

                    });

                });

            } else {
                socket.emit('auth.registration.responce',{
                    responce: 'error',
                    message: 'You already have an account.',
                });
            }
        });
    });

    socket.on('get.user.info', function(data) {
        jwt.verify(data.token, data.key, function(err, data2) {
            if(data2) {
                let sql = `SELECT * FROM users WHERE id = '${data2.id}' LIMIT 1`;
                let query = db.query(sql, (err, result, fields) => {
                    // console.log(result)
                    socket.emit('recieve.user.info', {
                        id:result[0].id,
                        display_name:result[0].p_display_name,
                        email:result[0].email,
                        setup:result[0].setup,
                        identifier:result[0].identifier,
                        steamhex:result[0].steam_hex,
                        discordid:result[0].discord_id,
                        avatar:result[0].avatar_url,
                        responce:'success'
                    });
                });
            } else {
                socket.emit('recieve.user.info', { responce:'failed' });
            }
        });
    });

    socket.on('get.user.info2', function(data) {
        jwt.verify(data.token, data.key, function(err, data2) {
            if(data2) {
                let sql = `SELECT * FROM users WHERE id = '${data2.id}' LIMIT 1`;
                let query = db.query(sql, (err, result, fields) => {
                    socket.emit('recieve.user.info2', {
                        id:result[0].id,
                        display_name:result[0].p_display_name,
                        email:result[0].email,
                        setup:result[0].setup,
                        identifier:result[0].identifier,
                        steamhex:result[0].steam_hex,
                        discordid:result[0].discord_id,
                        avatar:result[0].avatar_url,
                    });
                });
            }
        });
    });

    socket.on('get.user.info.public', function(data) {
        if(data) {
            let sql = `SELECT * FROM users WHERE id = '${data.userid}' LIMIT 1`;
            let query = db.query(sql, (err, result, fields) => {
                if(result[0]) {
                    socket.emit('recieve.user.info.public', {
                        responce: 'success',
                        id:result[0].id,
                        display_name:result[0].p_display_name,
                        avatar:result[0].avatar_url,
                    });
                } else {
                    socket.emit('recieve.user.info.public', {
                        responce: 'err'
                    });
                }
                
            });
        }
    });


    // USER SETTINGS PAGE
    socket.on('update.user.display_name', function(data) {
        if(data) {
            jwt.verify(data.token, data.key, function(err, data2) {
                if(data2) {
                    let sql = `UPDATE users SET p_display_name = '${data.new}' WHERE id = '${data2.id}'`;
                    let query = db.query(sql, (err, result, fields) => {
                        socket.emit('update.user.display_name.recieve', { responce:'success' })
                    })
                }
            })
        }
    });

    socket.on('update.user.avatar', function(data) {
        if(data) {
            jwt.verify(data.token, data.key, function(err, data2) {
                if(data2) {
                    let sql = `UPDATE users SET avatar_url = '${data.new}' WHERE id = '${data2.id}'`;
                    let query = db.query(sql, (err, result, fields) => {
                        socket.emit('update.user.display_name.recieve', { responce:'success' })
                    });
                }
            })
        }
    });

    socket.on('get.user.apps', function(data) {
        if(data) {
            jwt.verify(data.token, data.key, function(err, data2) {
                if(data2) {
                    // GET AMMOUNT APPS
                    let sql = `SELECT * FROM resources_apps WHERE userid = ${data2.id}`;
                    let query = db.query(sql, (err, result, fields) => {
                        if(result.length > 0) {
                            socket.emit('recieve.user.apps', { ammount:result.length, result:result });
                        } else {
                            socket.emit('recieve.user.apps', { ammount:result.length });
                        }

                    });
                }
            })
        }
    });
    


    socket.on('new.application.submitted', function(data) {
        if(data) {
            jwt.verify(data.token, data.key, function(err, data2) {
                if(data2) {
                    let sql2 = `SELECT * FROM users WHERE id = ${data2.id}`;
                    let query2 = db.query(sql2, (err2, result2, fields2) => {
                        if(result2.length > 0) {
                            const now = new Date();
                            let submitted_date = date.format(now, 'YYYY/MM/DD HH:mm:ss');
                            let sql = `INSERT INTO resources_apps (userid, user_name, user_email, submitted_date, status, department, app01, app02, app03, app04, app05, app06) VALUES ('${data2.id}','${result2[0].user_name}','${result2[0].user_email}', '${submitted_date}',' ${data.status}', '${data.department}', '${data.app01}', '${data.app02}', '${data.app03}', '${data.app04}', '${data.app05}', '${data.app06}') `;
                            let query = db.query(sql, (err, result, fields) => {
                                if(err) { console.log(err) }
                                let sql3 = `SELECT * FROM resources_apps WHERE userid = '${data2.id}'`;
                                let query3 = db.query(sql3, (err3, result3, fields3) => {
                                    console.log(result3[0])
                                    socket.emit('new.application.recieved', { app_id:result3[0].id });
                                })
                            });
                        }
                    });

                    
                }
            })
        }
    });

    socket.on('app.check', function(data) {
        if(data) {
            jwt.verify(data.token, data.key, function(err, data2) {
                if(data2) {
                    let sql = `SELECT * FROM resources_apps WHERE id = '${data.appid}'`;
                    let query = db.query(sql, (err, result, fields) => {
                        if(result[0]) {
                            if(data2.id == result[0].userid) {
                                socket.emit('app.check.recieve', { status:'success', result:result[0] })
                            } else {
                                socket.emit('app.check.recieve', { status:'err' })
                            }
                        } else {
                            socket.emit('app.check.recieve', { status:'err' })
                        }
                    });
                }
            })
        }
    });

    socket.on('get.apps.all', function(data) {
        if(data) {
            jwt.verify(data.token, data.key, function(err, data2) {
                if(data2) {
                    let sql = `SELECT * FROM resources_apps`;
                    let query = db.query(sql, (err, result, fields) => {
                        if(err) { console.log(err) };
                        if(result) {
                            socket.emit('recieve.apps.all', { count:result.length, result:result });
                        }

                    });
                }
            })
        }
    });

    socket.on('get.apps.pending', function(data) {
        if(data) {
            jwt.verify(data.token, data.key, function(err, data2) {
                if(data2) {
                    let sql = `SELECT * FROM resources_apps WHERE status = 'Application Pending'`;
                    let query = db.query(sql, (err, result, fields) => {
                        if(result) {
                            socket.emit('recieve.apps.pending', { count:result.length, result:result });
                        }
                    });
                }
            })
        }
    });

    socket.on('get.apps.denied', function(data) {
        if(data) {
            jwt.verify(data.token, data.key, function(err, data2) {
                if(data2) {
                    let sql = `SELECT * FROM resources_apps WHERE status = 'Application Denied'`;
                    let query = db.query(sql, (err, result, fields) => {
                        if(result) {
                            socket.emit('recieve.apps.denied', { count:result.length, result:result });
                        }

                    });
                }
            })
        }
    });

    socket.on('get.apps.acepted', function(data) {
        if(data) {
            jwt.verify(data.token, data.key, function(err, data2) {
                if(data2) {
                    let sql = `SELECT * FROM resources_apps WHERE status = 'Application Accepted'`;
                    let query = db.query(sql, (err, result, fields) => {
                        if(result) {
                            socket.emit('recieve.apps.accepted', { count:result.length, result:result });
                        }

                    });
                }
            })
        }
    });

    socket.on('get.apps.closed', function(data) {
        if(data) {
            jwt.verify(data.token, data.key, function(err, data2) {
                if(data2) {
                    let sql = `SELECT * FROM resources_apps WHERE status = 'Application Closed'`;
                    let query = db.query(sql, (err, result, fields) => {
                        if(result) {
                            socket.emit('recieve.apps.closed', { count:result.length, result:result });
                        }

                    });
                }
            })
        }
    });

    socket.on('get.current.app', function(data) {
        if(data) {
            jwt.verify(data.token, data.key, function(err, data2) {
                if(data2) {
                    let sql = `SELECT * FROM resources_apps WHERE id = '${data.appid}'`;
                    let query = db.query(sql, (err, result, fields) => {
                        
                        if(result) {
                            socket.emit('recieved.current.app', { responce:'success', result:result });
                        } else {
                            socket.emit('recieved.current.app', { responce:'failed' });
                        }

                    });
                }
            });
        }
    });
    
    socket.on('get.app.user.info', function(data) {
        if(data) {
            jwt.verify(data.token, data.key, function(err, data2) {
                if(data2) {
                    let sql = `SELECT * FROM users WHERE id = '${data.userid}'`;
                    let query = db.query(sql, (err, result, fields) => {
                        if(result) {
                            socket.emit('recieve.app.user.info', { responce:'success', result:result });
                        } else {
                            socket.emit('recieve.app.user.info', { responce:'failed' });
                        }
                    });
                }
            })
        }
    });

    socket.on('accept.current.app', function(data) {
        if(data) {
            jwt.verify(data.token, data.key, function(err, data2) {
                if(data2) {
                    let sql = `UPDATE resources_apps SET status = 'Application Accepted' WHERE id = '${data.appID}'`;
                    let query = db.query(sql, (err, result, fields) => {
                        if(err) {
                            socket.emit('current.app.updated', { responce:'err' });
                        } else {
                            socket.emit('current.app.updated', { responce:'success' });
                        }
                    });
                }
            })
        }
    });

    socket.on('pending.current.app', function(data) {
        if(data) {
            jwt.verify(data.token, data.key, function(err, data2) {
                if(data2) {
                    let sql = `UPDATE resources_apps SET status = 'Application Pending', pending_reasons = '${data.reasons}', pending_type = '${data.type}' WHERE id = '${data.appID}'`;
                    let query = db.query(sql, (err, result, fields) => {
                        if(err) {
                            socket.emit('current.app.updated', { responce:'err' });
                        } else {
                            socket.emit('current.app.updated', { responce:'success' });
                        }
                    });
                }
            })
        }
    });

    socket.on('deny.current.app', function(data) {
        if(data) {
            jwt.verify(data.token, data.key, function(err, data2) {
                if(data2) {
                    let sql = `UPDATE resources_apps SET status = 'Application Denied', denied_reasons = '${data.reasons}' WHERE id = '${data.appID}'`;
                    let query = db.query(sql, (err, result, fields) => {
                        if(err) {
                            socket.emit('current.app.updated', { responce:'err' });
                        } else {
                            socket.emit('current.app.updated', { responce:'success' });
                        }
                    });
                }
            })
        }
    });



    // END OF SOCKETS

});




