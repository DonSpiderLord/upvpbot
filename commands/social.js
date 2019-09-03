const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
const prefix = botconfig.prefix

module.exports.run = async (bot, message, args) => {
        let sEmbed = new Discord.RichEmbed()
        .setColor("#e6aa07")
        .setTitle("Help Menu")
        .setThumbnail(bot.user.displayAvatarURL)
        //.setAuthor(bot.user.username)
        .setDescription(`These Are Links To Our Social Media Profiles/Websites:\n\n**Discord** - _discord.gg/8hCeYgc_\n\n**Twitter** - _twitter.com/UPVP_Network_\n\n**Instagram** - _instagram.com/upvp_network_\n\n**U-PvP Website** - _u-pvp.com_\n\n**Voting Sites** - _u-pvp.com/vote1_\n_u-pvp.com/vote2_`);
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
