const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.member.roles.some(r=>["Owner"].includes(r.name)) ) {

    let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!mutee) return message.channel.send("Please supply a user to mute!");

    let muterole = message.guild.roles.find(r => r.name === "Muted");

    mutee.addRole(muterole.id).then(() => {
      message.delete()
      mutee.send(`Hello, you have been muted in ${message.guild.name}.\nThis is automated message. Don't respond to it.\nHave A Nice Day :wave:`);
      message.channel.send(`${mutee.user.username} Has Been Permanently Muted! :mute:`);
    })

    let Membed = new Discord.RichEmbed()
    .setColor("#0890d4")
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("Moderation:", "Permanent Mute")
    .addField("Muted Person:", mutee.user.username)
    .addField("Moderator:", message.author.username)
    .addField("Date:", message.createdAt.toLocaleString())

    bot.guilds.get('607885235719372801').channels.get('608577419527454730').send({embed: Membed});

} else {

    return message.channel.send("You don't have permission to use this command!");

  }
}


module.exports.config = {
  name: "permmute",
  aliases: ["permnospeak"],
  usage: "u.permmute <@user>",
  description: "Mutes Specified User Till Unmuted.",
  //noalias: "No Aliases",
  accessableby: "Owner"
}
