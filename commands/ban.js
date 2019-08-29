const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

}

module.exports.config = {
  name: "ban",
  aliases: ["banish"],
  usage: "u.ban <@user>",
  description: "Bans Specified User.",
  //noalias: "No Aliases",
  accessableby: "Owner"
}

module.exports = {
	name: 'ban',
	description: 'Bans Specified User!',
	execute(message, args) {
		message.channel.send('Pong!');
	},
};
