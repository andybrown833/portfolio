var Discord = require('discord.js');
var config = require('../config/config.js');

async function Add(client) {
    var LoggingChannel = client.channels.cache.get('812596601306349618');
    client.on('guildBanAdd', (guild, user) => {
        let logEmbed = new Discord.MessageEmbed()
            .setTitle('Guild Ban Logs')
            .setDescription(`${user.name} has been banned from ${guild.name}
            User ID: ${user.id}`)
            .setColor("#ff0000")
            .setFooter(config.BotFooter, client.user.avatarURL())
            .setTimestamp();
            if(LoggingChannel) { LoggingChannel.send(logEmbed) };
    });
};

async function Remove(client) {
    var LoggingChannel = client.channels.cache.get('812596601306349618');
    client.on('guildBanAdd', (guild, user) => {
        let logEmbed = new Discord.MessageEmbed()
            .setTitle('Guild Ban Logs')
            .setDescription(`${user.name} has been unbanned from ${guild.name}
            User ID: ${user.id}`)
            .setColor("#ff0000")
            .setFooter(config.BotFooter, client.user.avatarURL())
            .setTimestamp();
            if(LoggingChannel) { LoggingChannel.send(logEmbed) };
    });
};

module.exports = { Add, Remove }