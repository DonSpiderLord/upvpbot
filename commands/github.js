const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
const prefix = botconfig.prefix

module.exports.run = async (bot, message, args) => {
        let sEmbed = new Discord.RichEmbed()
        .setColor("#ffffff")
        .setTitle("GitHub Links")
        .setThumbnail(bot.user.displayAvatarURL)
        //.setAuthor(bot.user.username)
        .setDescription(`Link to U-PvP Discord Admin Bot Github Repository:\n\nhttps://github.com/DonSpiderLord/upvpbot\n\n===========================\nBot Made By DonSpiderLord#2408 - Send Bugs And Suggestions`);
        message.channel.send({embed: sEmbed});
    }

module.exports.config = {
  name: "github",
  aliases: ["git"],
  usage: "u.github",
  description: "Github Repositories Links",
  //noalias: "No Aliases",
  accessableby: "Peasant"
}
