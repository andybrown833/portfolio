var Discord = require('discord.js');
var config = require('../config/config.js');

async function Add(client) {
    var LoggingChannel = client.channels.cache.get('812596601306349618');
    client.on('guildMemberAdd', (member) => {
        let LogEmbed = new Discord.MessageEmbed()
            .setTitle('Server Member Log')
            .setDescription(`A user has joined.
            Member: ${member}
            Member ID: **${member.user.id}**
            Member Tag: **${member.user.tag}**`)
            .setColor(config.BotColor)
            .setFooter(config.BotFooter, client.user.avatarURL())
            .setTimestamp();
        let role = member.guild.roles.cache.find(r => r.name === "Server Member");
        if(role) { member.roles.add(role) };
        if(LoggingChannel) { LoggingChannel.send(LogEmbed) };
        
    });
};

async function Remove(client) {
    var LoggingChannel = client.channels.cache.get('812596601306349618');
    client.on('guildMemberRemove', (member) => {
        let BotLogEmbed = new Discord.MessageEmbed()
            .setTitle('Server Member Log')
            .setDescription(`A user has left. 
            Member: ${member}
            Member ID: **${member.user.id}**
            Member Tag: **${member.user.tag}**`)
            .setColor(config.BotColor)
            .setFooter(config.BotFooter, client.user.avatarURL())
            .setTimestamp();
            if(LoggingChannel) { LoggingChannel.send(LogEmbed) };
    });
};

async function Update(client) {
    var LoggingChannel = client.channels.cache.get('812596601306349618');
    client.on('guildMemberUpdate', (oldMember, newMember) => {
        let LogEmbed = new Discord.MessageEmbed()
            .setTitle('Server Member Log')
            .setDescription(`A user has been updated.
            **Member ID:** ${newMember.id}`)
            .setColor("#ff0000")
            .setFooter(config.BotFooter, client.user.avatarURL())
            .setTimestamp() ;
            if(LoggingChannel) { LoggingChannel.send(LogEmbed) };
    });
};


// function Avaliable(client) {
//     client.on('guildMemberAvailable', (member) => {
//         console.log("member")
//         // let BotLogChannel = client.channels.cache.get(config.BotLogChannel);
//         // let ServerLogChannel = newMember.guild.channels.cache.find(c => c.name == 'discord-logs');
//         // let ServerLogEmbed = new Discord.MessageEmbed()
//         //     .setTitle('Server Member Log')
//         //     .setDescription(`A user has had their nickname updated to: ${newMember}
            
//         //     **Member ID:** ${newMember.id}`)
//         //     .setColor("#ff0000")
//         //     .setFooter(config.BotFooter, client.user.avatarURL())
//         //     .setTimestamp()
//         // ;

            // if(ServerLogChannel) {
            //     ServerLogChannel.send(ServerLogEmbed);
            // }        // SEND BOT LOG MESSAGE
            // if(BotLogChannel) {
            //     BotLogChannel.send(BotLogEmbed);
            // }
        
//     });
// };

// guildMemberAvailable
/* Emitted whenever a member becomes available in a large guild.
PARAMETER     TYPE               DESCRIPTION
member        GuildMember        The member that became available    */
// client.on("guildMemberAvailable", function(member){
//     console.log(`member becomes available in a large guild: ${member.tag}`);
// });


module.exports = { Add, Remove, Update }