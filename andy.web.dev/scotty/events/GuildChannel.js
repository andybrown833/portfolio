var Discord = require('discord.js');
var config = require('../config/config.js');

async function Create(client) {
    var LoggingChannel = client.channels.cache.get('812596601306349618');
    client.on('channelCreate', async channel => {

        let AuditLogFetch = await channel.guild.fetchAuditLogs({limit: 1, type: "CHANNEL_CREATE"});
        let Entry = AuditLogFetch.entries.first();
        let logEmbed = new Discord.MessageEmbed()
            .setTitle('Server Channel Logs - CHANNEL CREATED')
            .setDescription(`**<#${channel.id}>** A new channel has been created by: ${Entry.executor.tag || "an **unknown User** (please check the audit logs)"} `)
            .setColor('#FF603D')
            .setFooter(config.BotFooter, client.user.avatarURL())
            .setTimestamp()
        ;
        if (Entry) {
            if(LoggingChannel) { LoggingChannel.send(logEmbed) };
        }

    });
};

async function Delete(client) {
    var LoggingChannel = client.channels.cache.get('812596601306349618');
    client.on('channelDelete', async channel => {

        let AuditLogFetch = await channel.guild.fetchAuditLogs({limit: 1, type: "CHANNEL_DELETE"});
        let Entry = AuditLogFetch.entries.first();
        let logEmbed = new Discord.MessageEmbed()
            .setTitle('Server Channel Logs - CHANNEL DELETED')
            .setDescription(`**${channel.name || channel.id}** has been deleted by: ${Entry.executor.tag || "an **unknown User** (please check the audit logs)"} `)
            .setColor('#FF603D')
            .setFooter(config.BotFooter, client.user.avatarURL())
            .setTimestamp()
        ;
        if (Entry) {
            if(LoggingChannel) { LoggingChannel.send(logEmbed) };
        }

    });
};

async function Update(client) {
    var LoggingChannel = client.channels.cache.get('812596601306349618');
    client.on('channelUpdate', async (oldChannel, newChannel) => {

        let logEmbed = new Discord.MessageEmbed()
            .setTitle('Server Channel Logs - CHANNEL UPDATED')
            .setDescription(`A channel in this server has been updated.

            **Old Channel Name**
            ${oldChannel.name}
            
            **New Channel Name**
            <#${newChannel.id}>
            
            **Channel Id:** ${newChannel.id}
            **Updated By:** (please check the audit logs) `)
            .setColor('#FF603D')
            .setFooter(config.BotFooter, client.user.avatarURL())
            .setTimestamp()
        ;

        var DoNotLogTheseChannels = [
            '812596601306349618',
        ]

        if(newChannel.id !== DoNotLogTheseChannels) {
            if(LoggingChannel) { LoggingChannel.send(logEmbed) };
        }       

    });
};

module.exports = { Create, Delete, Update }