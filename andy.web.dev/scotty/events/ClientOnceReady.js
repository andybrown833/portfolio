var Discord = require('discord.js');
var config = require('../config/config.js');

async function Start(client) {
    var LoggingChannel = client.channels.cache.get('812596601306349618');
    client.once('ready', () => { 
        let ReadyEmbed = new Discord.MessageEmbed()
            .setAuthor('Client Started! ' + client.user.tag)
            .setColor(config.BotColor)
            .setFooter(config.BotFooter, client.user.avatarURL())
            .setTimestamp()
        ;
        if(LoggingChannel) { LoggingChannel.send(ReadyEmbed) };
        console.log('--------------------------------------------------------');
        console.log('Client Started! ' + client.user.tag);
        console.log('--------------------------------------------------------');
        
        client.user.setActivity('YouTube', {type: "WATCHING"})

    });
}

module.exports = { Start }