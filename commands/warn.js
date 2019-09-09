const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.member.roles.some(r=>["Owner", "Co-Owner", "Manager", "Admin", "Mod+", "Moderator", "Trial-Mod"].includes(r.name)) ) {

    let warnee = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!warnee) return message.channel.send("Please supply a user to warn!");
    let reason = args[1];
    if(!reason) return message.channel.send("Please supply a reason to warn for!");

    let warnSuccessfulEmbed = new Discord.RichEmbed()
        .setColor("#ffbb00")
        .setTitle(`${warnee.user.username} Has Been Warned For ${reason}!`);
    message.channel.send({embed: warnSuccessfulEmbed});
    message.delete();

    let Wembed = new Discord.RichEmbed()
    .setColor("#ffbb00")
    .setAuthor("U-PvP Network Modlogs")
    .addField("Moderation:", "Warn", true)
    .addField("Warned Person:", message.author.username, true)
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("Reason:", reason, true)
    .addField("Moderator:", message.author.username, true)

    bot.guilds.get('569546798725726236').channels.get('591314683286257674').send({embed: Wembed}); //sends message to mod-logs

} else {

    return message.channel.send("You don't have permission to use this command!");

  }
}

module.exports.config = {
  name: "warn",
  aliases: ["penalty"],
  usage: "u.warn <@user>",
  description: "Mutes Specified User.",
  //noalias: "No Aliases",
  accessableby: "Owner"

}
