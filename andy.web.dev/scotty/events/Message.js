var Discord = require('discord.js');
var config = require('../config/config.js');

async function Message(client) {
    var LoggingChannel = client.channels.cache.get('812596601306349618');
    client.on('message', (msg) => {
        if(msg.author.bot) return;
        if(!msg.content.startsWith(config.BotPrefix)) return;
        if(msg.channel.type === 'dm') return;
        if(msg.content.startsWith(config.BotPrefix)) {
            let args = msg.content.slice(config.BotPrefix.length).trim().split(" ");
            let cmd = args.shift().toLowerCase();
            let cmd2 = client.commands.get(cmd);
            if(!client.commands.has(cmd)) return;
            function executeCommand() {
                msg.delete();
                client.commands.get(cmd).execute(client, msg, args);
                let server = msg.guild.id;
                logMessage(client, msg, server);
            }
            executeCommand();           
            function logMessage(client, msg, server) {
                let LogEmbed = new Discord.MessageEmbed()
                    .setTitle('Command Log')
                    .addFields(
                        { name: 'Command', value: msg.content },
                        { name: 'Author', value: msg.author.tag },
                        { name: 'Channel', value: msg.channel.name },
                        { name: 'Server', value: msg.guild.name },
                    )
                    .setFooter(config.BotFooter);
                if(LoggingChannel) { LoggingChannel.send(LogEmbed) };
            }
        }
    });
};

async function Delete(client) {
    var LoggingChannel = client.channels.cache.get('812596601306349618');
    client.on('messageDelete', (msg) => {

        let LogEmbed = new Discord.MessageEmbed()
            .setTitle('Message Deleted')
            .setDescription(`
            A message sent by **${msg.author}** has been deleted in **${msg.guild.name}**.
            Content: ${msg.content}
            Channel: ${msg.channel.id}
            Message ID: ${msg.id}`)
            .setColor('#ff0000')
            .setFooter(config.BotFooter, client.user.avatarURL())
            .setTimestamp()
        ;

        if(LoggingChannel) { LoggingChannel.send(LogEmbed) };

    });
};

module.exports = { Message, Delete }