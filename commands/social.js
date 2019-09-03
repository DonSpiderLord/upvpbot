const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
const prefix = botconfig.prefix

module.exports.run = async (bot, message, args) => {
        let sEmbed = new Discord.RichEmbed()
        .setColor("#e6aa07")
        .setTitle("Help Menu")
        .setThumbnail(bot.user.displayAvatarURL)
        //.setAuthor(bot.user.username)
        .setDescription("These Are Links To Our Social Media Profiles/Websites:\n\n**Discord** - `discord.gg/8hCeYgc`\n\n**Twitter** - `twitter.com/UPVP_Network`\n\n**Instagram** - `instagram.com/upvp_network`\n\n**U-PvP Website** - `u-pvp.com`\n\n**Voting Sites** - `u-pvp.com/vote1` And `u-pvp.com/vote2`");
        message.channel.send({embed: sEmbed});
    }

module.exports.config = {
  name: "social",
  aliases: ["media"],
  usage: "u.social",
  description: "Shows all links to social media's",
  //noalias: "No Aliases",
  accessableby: "Peasant"
}
