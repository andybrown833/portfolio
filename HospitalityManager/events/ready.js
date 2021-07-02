const config = require('../tools/config.js');
const embeds = require('../tools/embeds.js');
const chalk = require('chalk');
const dateformat = require ('dateformat');
const now = new Date();

module.exports = (client, member) => {

  console.log(chalk.inverse.bold.white('-----------------------------------------------------'));
  console.log(chalk.inverse.bold.red('-----------------------------------------------------'));
  console.log(chalk.inverse.bold.red('------------ LOGGED IN AS ---------------------------'));
  console.log(chalk.inverse.bold.red(`------------ ${client.user.tag} ---------------`));
  console.log(chalk.inverse.bold.red('-----------------------------------------------------'));
  console.log(chalk.inverse.bold.green('-----------------------------------------------------'));
  console.log(chalk.inverse.bold.green('------------ ACTIVATED ------------------------------'));
  console.log(chalk.inverse.bold.green('-----------------------------------------------------'));

}
