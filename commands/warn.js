const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.member.roles.some(r=>["Owner"].includes(r.name)) ) {

    let warnee = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!warnee) return message.channel.send("Please supply a user to warn!");
    let reason = args[1];
    if(!reason) return message.channel.send("Please supply a reason to warn for!");

    let warnEmbed = new Discord.RichEmbed()
        .setColor("#0890d4")
        .setTitle(`${warnee.user.username} Has Been Warned For ${reason}!`);
    message.channel.send({embed: warnEmbed});
    message.delete();

    let Wembed = new Discord.RichEmbed()
    .setColor("#0890d4")
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("Moderation:", "Warn")
    .addField("Warner Person:", warnee.user.username)
    .addField("Reason:", reason)
    .addField("Moderator:", message.author.username)
    .addField("Date:", message.createdAt.toLocaleString())

    bot.guilds.get('607885235719372801').channels.get('608577419527454730').send({embed: Wembed}); //sends message to mod-logs

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
