const botconfig = require(".../botconfig.json");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let sEmbed = new Discord.RichEmbed()
  .setColor("#5780cd")
  .setTitle("Bot Help")
  .addField("This is just a test!!!", true)
  message.channel.send({embed: sEmbed});
}

module.exports.config = {
  name: "help",
  aliases: ["h", "helpme"]
}
