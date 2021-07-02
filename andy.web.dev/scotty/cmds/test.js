var Discord = require('discord.js');
var config = require('../config/config');

module.exports = {
    name: 'test',
    status: 'live',
    allowed: '',
    execute(client, msg, args) {
        
        var AndyBrown833 = msg.guild.roles.cache.find(r => r.name === "AndyBrown833");
        var Manager = msg.guild.roles.cache.find(r => r.name === "Manager");
        var Administrator = msg.guild.roles.cache.find(r => r.name === "Administrator");
        var Moderator = msg.guild.roles.cache.find(r => r.name === "Moderator");
        var ServerMember = msg.guild.roles.cache.find(r => r.name === "Server Member");

        if(msg.member.roles.cache.has(AndyBrown833.id)) {
            msg.reply('You do have permission.')
        } else {
            msg.reply('You do **NOT** have permission.')
        }

    }

}
