const config = require('../tools/config.js');
const embeds = require('../tools/embeds.js');
const Discord = require('discord.js');
const chalk = require('chalk');
const dateformat = require ('dateformat');
const now = new Date();

module.exports = {
    run: async(client, message, args, member) => {

// DELETES THE COMMAND MESSAGE
message.delete();

agreementEmbed = new Discord.MessageEmbed()
.setTitle("You have successfully agreed!")
.setDescription(`<@${message.author.id}>, your agreement has been saved! Thank you!`)
.setColor(config.color)
.setFooter(config.footer);

function agreementMadeTesting(channel) {
    message.author.send(agreementEmbed)
    .then(message.member.roles.add(config.r_member))
    .then(message.member.roles.remove(config.r_verify))
}
function agreementMadeMain(channel) {
    message.author.send(agreementEmbed)
    .then(message.member.roles.add(config.rM_member))
    .then(message.member.roles.remove(config.rM_verify))
}

if(message.guild.id === '708787788497027094') { // TESTING SERVER
    agreementMadeTesting(message.channel)
} else {
    if(message.guild.id === '595374163628130336') { // MAIN SERVER
        agreementMadeMain(message.channel)
    } else {
        return;
    }
}


},
aliases: [],
description: 'Removes the verify role and gives the member role, also sends an agreement confirmation message in the DM.'
}
