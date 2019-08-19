const botconfig = require("../botconfig.json");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let IPEmbed = new Discord.RichEmbed()
  .setColor("#e6aa07")
  .setTitle("IP Adresses")
  .setThumbnail(bot.user.displayAvatarURL)
  //.setAuthor(bot.user.username)
  .setDescription(`U-PvP Network Server IP's\n\n**<=Hub=>**\nIP: play.u-pvp.com\nPORT: 19132\n\n**<=PvP Server=>**\nIP: pvp.u-pvp.com\nPORT: 19132\n\n**<=Creative Server=>**\nIP: creative.u-pvp.com\nPORT: 19132\n\n**<=SkyWars Server=>**\nIP: skywars.u-pvp.com\nPORT: 19132\n\n**<=Factions Server=>**\nIP: factions.u-pvp.com\nPORT: 19132\n\n_This is not final build. IP's may change any time._`);
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
