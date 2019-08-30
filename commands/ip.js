const botconfig = require("../botconfig.json");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let IPEmbed = new Discord.RichEmbed()
  .setColor("#e6aa07")
  .setTitle("IP Adresses")
  .setThumbnail(bot.user.displayAvatarURL)
  //.setAuthor(bot.user.username)
  .setDescription(`U-PvP Network Server\n**IP: play.u-pvp.com**\n**PORT: 19132**\nAvailable Servers:\n:airplane_arriving:<=Hub=>:airplane_departure:\n:crossed_swords:<=PvP Server=>:shield:\n:construction_site:<=Creative Server=>:homes:\n<=SkyWars Server=>   **Coming Soon**\n<=Factions Server=>   **Coming Soon**`);
  message.channel.send({embed: IPEmbed});


}

module.exports.config = {
  name: "ip",
  aliases: ["adress"],
  usage: "u.ip",
  description: "Shows IP's for all available servers.",
  //noalias: "No Aliases",
  accessableby: "Everyone"
}
