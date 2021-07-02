var Discord = require('discord.js');
var config = require('../config/config.js');

async function Create(client) {
    var LoggingChannel = client.channels.cache.get('812596601306349618');
    client.on('roleCreate', (role) => {
        let LogEmbed = new Discord.MessageEmbed()
            .setTitle('Guild Role Logs')
            .setDescription(`**${role.name}** has been created in **${role.guild.name}**`)
            .setColor("#ff0000")
            .setFooter(config.BotFooter, client.user.avatarURL)
            .setTimestamp();
        if(LoggingChannel) { LoggingChannel.send(LogEmbed) };
    });
};

async function Delete(client) {
    var LoggingChannel = client.channels.cache.get('812596601306349618');
    client.on('roleDelete', (role) => {
        let LogEmbed = new Discord.MessageEmbed()
            .setTitle('Guild Role Logs')
            .setDescription(`**${role.name}** has been deleted in **${role.guild.name}**`)
            .setColor("#ff0000")
            .setFooter(config.BotFooter, client.user.avatarURL())
            .setTimestamp();
        if(LoggingChannel) { LoggingChannel.send(LogEmbed) };
    });
};

module.exports = { Create, Delete }