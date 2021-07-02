const config = require('../tools/config.js');
const embeds = require('../tools/embeds.js');
const Discord = require('discord.js');
const chalk = require('chalk');
const dateformat = require ('dateformat');
const now = new Date();

module.exports = (client, member, message) => {
const mainLogChannel = client.channels.cache.get('708791472803020801');
const botLogChannel = client.channels.cache.get('711117801519185931');
const testingWelcomeChannel = client.channels.cache.get('712361769208905828');
const mainWelcomeChannel = client.channels.cache.get('712755547581055008');

// EMBEDS
const logEmbed = new Discord.MessageEmbed()
.setTitle("A New Member Arrived")
.setDescription(`**User:** ${member.id}
**Server:** ${member.guild.id}
**Time:** ${dateformat(now, 'mmmm dd, yyyy @ hh:MM:ss TT')}`)
.setColor(config.c_cyan)
.setFooter(config.footer);

const welcomeEmbed = new Discord.MessageEmbed()
.setTitle("Welcome to AndyBrown833's Discord Server!")
.setDescription(`<@${member.id}> We are glad you have joined us! Here you will be able to find important informaiton about AndyBrown833 along with the ability to chat with others in the server as well. Before we can continue on with access to the rest of the server however, there is one thing that we need to take care of. Rules. We require all new members as of **May 20th, 2020** to agree with the rules and guidelines below before access if granted to the rest of the server. Please read the pinned message above for a quick agreement.`)
.setColor(config.color)
.setFooter(config.footer)

// FUNCTIONS
function addMemberTesting(channel) {
    testingWelcomeChannel.send(`<@${member.id}>`)
    .then((message) => message.delete({ timeout: 1000}))
    .then((testingWelcomeChannel.send(welcomeEmbed))
    .then((message) => message.delete({ timeout: 30000})))
    .then(mainLogChannel.send(logEmbed))
    .then(botLogChannel.send(logEmbed))
}
function addMemberMain(channel) {
    member.roles.add(config.rM_verify)
    .then(mainWelcomeChannel.send(`<@${member.id}>`))
    .then((message) => message.delete({ timeout: 1000}))
    .then((mainWelcomeChannel.send(welcomeEmbed))
    .then((message) => message.delete({ timeout: 30000})))
    .then(mainLogChannel.send(logEmbed))
    .then(botLogChannel.send(logEmbed))
}

if(member.guild.id === '708787788497027094') { // TESTING SERVER
    addMemberTesting(testingWelcomeChannel)
} else {
    if(member.guild.id === '595374163628130336') { // MAIN SERVER
        addMemberMain(mainWelcomeChannel)
    } else {
        return;
    }
}


};
