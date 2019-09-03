const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.member.roles.some(r=>["Owner", "Co-Owner", "Manager", "Admin", "Mod+", "Moderator", "Trial-Mod"].includes(r.name)) ) {

    let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!mutee) return message.channel.send("Please supply a user to mute!");

    let time = args[1];
    if(time > 12) return message.channel.send("Max Mute Time Is 12 Hours");
    if(!time) return message.channel.send("Please Supply Mute Duration");
    let muterole = message.guild.roles.find(r => r.name === "Muted");

    mutee.addRole(muterole.id).then(() => {
      message.delete()
      message.channel.send(`${mutee.user.username} Has Been Muted For ${time} Hours! :mute:`);

      setTimeout(() => {mutee.removeRole(muterole);}, time * 3600000);
      setTimeout(() => {message.channel.send(`${mutee.user.username} Has Been Unmuted! :sound:`)}, time * 3600000);
    })

    let Membed = new Discord.RichEmbed()
    .setColor("#0890d4")
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("Moderation:", "Mute")
    .addField("Muted Person:", mutee.user.username)
    .addField("Moderator:", message.author.username)
    .addField("Date:", message.createdAt.toLocaleString())

    bot.guilds.get('607885235719372801').channels.get('608577419527454730').send({embed: Membed});

} else {

    return message.channel.send("You don't have permission to use this command!");

  }
}


module.exports.config = {
  name: "tempmute",
  aliases: ["tempnospeak"],
  usage: "u.tempmute <@user>",
  description: "Mutes Specified User For Specific Time.",
  //noalias: "No Aliases",
  accessableby: "Owner"

}
