// ########################################### \\
// #### Official client made by: ############# \\
// #### @AndyBrown#0833 ###################### \\
// #### client : Hospitality Manager#3924 #### \\
// ########################################### \\

const config = require('./tools/config.js');
const discord = require('discord.js');
const chalk = require('chalk');
const client = new discord.Client({ partials: ['MESSAGE', 'REACTION']});
const { registerCommands, registerEvents } = require('./tools/registry');
(async () => {
    client.login(config.token);
    client.commands = new Map();
    client.cachedMessageReactions = new Map();
    await registerEvents(client, '../events');
    await registerCommands(client, '../commands');

})();
