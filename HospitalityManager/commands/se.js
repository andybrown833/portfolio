const config = require('../tools/config.js');
const embeds = require('../tools/embeds.js');
const Discord = require('discord.js');
const chalk = require('chalk');
const dateformat = require ('dateformat');
const now = new Date();

module.exports = {
    run: async(client, message, args, member) => {
const mainLogChannel = client.channels.cache.get('708791472803020801');
const botLogChannel = client.channels.cache.get('711117801519185931');
const agreementChannelTesting = client.channels.cache.get('712756304833151086');
const agreementChannelMain = client.channels.cache.get('712362965495709766');

const sentEmbed = new Discord.MessageEmbed()
.setTitle("EMBED MESSAGE SENT")
.setDescription(`**${args[0]}** embed succesfully sent in <#${message.channel.id}>`)
.setColor(config.c_teal)
.setFooter(config.footer);

const agreementEmbed = new Discord.MessageEmbed()
.setTitle("Discord Server Agreement")
.setDescription(`- You understand and agree that you will follow all ${agreementChannelMain} listed above.
- You understand and agree that any **Staff** or **Admin** can utilize moderation tools in any channel within the server.
- You understand and agree that if you do not follow the above guidelines you are subject to a kick or possibly a ban from Staff or Administation.

**- Once you understand all statements above you may use the command (** .agree **) to revieve the needed roles to get started in the Discord Server.**`)
.setColor(config.color)
.setFooter(config.footer);

function wrongChannel(channel) {
  message.channel.send(embeds.wrongChannelEmbed)
}
function persmissions(channel) {
  message.channel.send(embeds.persmissionsEmbed)
}
function serverRules(channel) {
  message.channel.send(embeds.serverRulesEmbed)
  .then(botLogChannel.send(sentEmbed))
}
function serverRulesPinned(channel) {
  message.channel.bulkDelete(100)
  .then((message.channel.send(embeds.serverRulesEmbed))
  .then((message) => message.pin(message)))
  .then(botLogChannel.send(sentEmbed))
}
function agreement(channel) {
  message.channel.bulkDelete(100)
  .then((message.channel.send(agreementEmbed))
  .then((message) => message.pin(message)))
  .then(botLogChannel.send(sentEmbed))
}
function socialMedia(channel) {
  channel.send(embeds.socialMediaEmbed)
  .then(botLogChannel.send(sentEmbed))
}
function socialMediaPinned(channel) {
  channel.send(embeds.socialMediaEmbed)
  .then((message) => message.pin(message))
  .then(botLogChannel.send(sentEmbed))
}

// DELETES THE COMMAND MESSAGE
message.delete();

if(!message.author.id === '595362070153658369') {
  return persmissions(message.channel);
} else {
  if(args[0] === 'rules') {
    if(args[1] === 'pin') {
      serverRulesPinned(message.channel)
    } else {
      serverRules(message.channel)
    }
  }
  if(args[0] === 'agreement') {
    agreement(message.channel)
  }
  if(args[0] === 'socialmedia') {
    if(args[1] === 'pin') {
      socialMediaPinned(message.channel)
    } else {
      socialMedia(message.channel)
    }
  }
// 

}



},
aliases: [],
description: ''
}
