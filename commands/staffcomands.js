const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
const prefix = botconfig.prefix

module.exports.run = async (bot, message, args) => {
        let sEmbed = new Discord.RichEmbed()
        .setColor("#e6aa07")
        .setTitle("Help Menu")
        .setThumbnail(bot.user.displayAvatarURL)
        .setAuthor(bot.user.username)
        .setDescription(`The bot prefix is: ${prefix}\n\n**:oncoming_police_car: Staff Commands And Usages: :oncoming_police_car:**\n_u.tempmute_ - Mutes Specified User For Specified Time (12H Max).\nUsage: _u.tempmute <@discorduser> <time in hours>_\nUsable By: Trial-Mod And Above\n_u.permmute_ - Mutes Specified User Till Unmuted.\nUsage: _u.permmute <@discorduser>_\nUsable By: Admin And Above\n_u.unmute_ - Unmutes Specified User.\nUsage: _u.unmute <@discorduser>_\nUsable By: Admin And Above\n_u.warn_ - Warns Specified User.\nUsage: _u.warn <@discorduser>_\nUsable By: Trial-Mod And Above\n_u.kick_ - Kicks Specified User.\nUsage: _u.kick <@discorduser>_\nUsable By: Moderator And Above\n_u.tempban_ - Bans Specified User (Max 24H).\nUsage: _u.tempban <@discorduser> <time in hours>_\nUsable By: Admin And Above\n_u.permban_ - Bans Specified User Forever\nUsage: _u.permban <@discorduser>_\nUsable By: Manager And Above\n_u.purge_ - Deletes Big Amount Of Messages (Max 100).\nUsage: _u.purge <NR. Of Messages>_\nUsable By: Admin And Above`);
        message.channel.send({embed: sEmbed});
    }

module.exports.config = {
  name: "staffcomands",
  aliases: ["sc", "scommands"],
  usage: "u.staffcomands",
  description: "Staff Commands List",
  //noalias: "No Aliases",
  accessableby: "Staff"
}
