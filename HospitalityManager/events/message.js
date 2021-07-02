const config = require('../tools/config.js');
const embeds = require('../tools/embeds.js');
const Discord = require('discord.js');
const chalk = require('chalk');
const dateformat = require ('dateformat');
const now = new Date();

module.exports = (client, message) => {
const mainLogChannel = client.channels.cache.get('708791472803020801');
const botLogChannel = client.channels.cache.get('711117801519185931');

logEmbed = new Discord.MessageEmbed()
.setTitle("Command Usage Log")
.setDescription(`**Command:** ${message.content}
**Channel:** <#${message.channel.id}>
**User:** ${message.author.tag}
**Time:** ${dateformat(now, 'mmmm dd, yyyy @ hh:MM:ss TT')}`)
// .addField("Command:",`${message.content}`,true)
// .addField("Channel:",`<#${message.channel.id}>`,true)
// .addField("User:",`${message.author.tag}`,true)
// .addField("Time:",`${dateformat(now, 'mmmm dd, yyyy @ hh:MM:ss TT')}`,true)
.setColor(config.c_orange)
.setFooter(config.footer);

function log(channel) {
    botLogChannel.send(logEmbed)
    .then(mainLogChannel.send(logEmbed))
}
    if(message.author.bot) return;

    if(!message.content.startsWith(config.prefix)) return;

    const args = message.content.slice(config.prefix.length).split(' ');
    const cmdName = args.shift().toLowerCase();

    if(client.commands.get(cmdName)) {
        client.commands.get(cmdName)(client, message, args);
        log(message.channel)
    } else
        console.log("Command does not exist.");
};
