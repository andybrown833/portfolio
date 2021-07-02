const config = require('../tools/config.js');
const Discord = require('discord.js');
const chalk = require('chalk');
const dateformat = require ('dateformat');
const now = new Date();

// EMBEDS

const testEmbed = new Discord.MessageEmbed()
.setTitle("This is the test title.")
.setDescription('This is the test description.')
.setColor(config.color)
.setFooter(config.footer);

const dmEmbed = new Discord.MessageEmbed()
.setTitle("DM OPERATION NOT WORKING")
.setDescription("I'm sorry, I can't do any operation in the DM at this time.")
.setColor(config.c_red)
.setFooter(config.footer);

const persmissionsEmbed = new Discord.MessageEmbed()
.setTitle("YOU DON'T HAVE PERMISSIONS!")
.setDescription("At this time you don't have the correct permissions or roles to do this action.")
.setColor(config.c_red)
.setFooter(config.footer);

const wrongChannelEmbed = new Discord.MessageEmbed()
.setTitle("YOU HAVE USED THE WRONG CHANNEL FOR THIS COMMAND!")
.setColor(config.c_red)
.setFooter(config.footer);

const serverRulesEmbed = new Discord.MessageEmbed()
.setTitle("Official Discord Rules & Guidelines")
.setDescription(`**1)** Be respectful AT ALL TIMES, REGARDLESS OF SITUATION

  **2)** Sending/Linking any harmful material such as viruses, IP grabbers or harmware results in an immediate and permanent ban.

  **3)** Use proper grammar and spelling and don't spam.

  **4)** Usage of excessive extreme innapropriate langauge is prohibited.

  **5)** Mentioning @everyone, the Moderators or a specific person without proper reason is prohibited.

  **6)** Act civil in Voice Chat.

  **7)** Post content in the correct channels.

  **8)** Don't post someone's personal information without permission.

  **9)** Listen to what Staff says.

  **10)** Just have fun!`)
.setColor(config.color)
.setFooter(config.footer);

const socialMediaEmbed = new Discord.MessageEmbed()
.setTitle("AndyBrown833's Social Media")
.setDescription(`Below is the official social media list for <@${config.commander}>
**Discord Invite: **https://discord.gg/hAjXxG9
**Twitch: **https://www.twitch.tv/andybrown833
**YouTube: **https://www.youtube.com/channel/UCw3wIn5s568M47oDCnOCShg
**Twitter: **https://twitter.com/AndyBrown833`)
.setColor(config.color)
.setFooter(config.footer);





module.exports = {

  dmEmbed: dmEmbed,
  persmissionsEmbed: persmissionsEmbed,
  wrongChannelEmbed: wrongChannelEmbed,
  testEmbed: testEmbed,
  serverRulesEmbed: serverRulesEmbed,
  socialMediaEmbed: socialMediaEmbed

};
