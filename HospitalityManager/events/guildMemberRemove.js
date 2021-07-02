const config = require('../tools/config.js');
const embeds = require('../tools/embeds.js');
const Discord = require('discord.js');
const chalk = require('chalk');
const dateformat = require ('dateformat');
const now = new Date();

module.exports = (client, member) => {
const mainLogChannel = client.channels.cache.get('708791472803020801');
const botLogChannel = client.channels.cache.get('711117801519185931');

logEmbed = new Discord.MessageEmbed()
.setTitle("A Member Has Left")
.setDescription(`**User:** ${member.id}
**Server:** ${member.guild.id}
**Time:** ${dateformat(now, 'mmmm dd, yyyy @ hh:MM:ss TT')}`)
.setColor(config.c_cyan)
.setFooter(config.footer);

function log(channel) {
    channel.send(logEmbed)
}

log(botLogChannel);
log(mainLogChannel);




};
