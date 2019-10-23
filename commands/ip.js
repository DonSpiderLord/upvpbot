const botconfig = require("../botconfig.json");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let IPEmbed = new Discord.RichEmbed()
  .setColor("#e6aa07")
  .setTitle("IP Adresses")
  .setThumbnail(bot.user.displayAvatarURL)
  //.setAuthor(bot.user.username)
  .setDescription(`Available Servers:\n\n<=PvP Server=>\n**IP: play.u-pvp.com**\nPORT: 19132\n\n<=Creative Server=>\n**creative.u-pvp.com**\nPORT: 19132\n\n<=Hub=>\t**Coming Soon**\n<=SkyWars Server=>\t**Coming Soon**\n<=Factions Server=>\t**Coming Soon**`);
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
