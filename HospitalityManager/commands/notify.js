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


function wrongChannel(channel) {
    message.channel.send(embeds.wrongChannelEmbed)
}
function addNotify(channel,member) {
    message.member.roles.add(config.r_notify)
}
function removeNotify(channel,member) {
    message.member.roles.remove(config.r_notify)
}


if(message.guild.id === '708787788497027094') { // TESTING SERVER

    if(message.channel.id === '714837947232288779') {
        if(message.member.rolescache.some(config.r_notify)) {
            removeNotify(message.channel,message.author)
        } else {
            addNotify(message.channel,message.author)
        }
    } else {
        wrongChannel(message.channel)
    }

} else {
    if(message.guild.id === '595374163628130336') { // MAIN SERVER
        return;
    } else {
        return;
    }
}


},
aliases: [],
description: 'Removes the verify role and gives the member role, also sends an agreement confirmation message in the DM.'
}
