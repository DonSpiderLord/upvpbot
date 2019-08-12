const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.member.roles.some(r=>["Owner"].includes(r.name)) ) {
      let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
      if(!mutee) return message.channel.send("Please supply a user to unmute!");

      let muterole = message.guild.roles.find(r => r.name === "Muted")
      if(!muterole) return message.channel.send("There is no mute role!");

      mutee.removeRole(muterole.id).then(() => {
        message.delete()
        mutee.send(`Hello, you have been unmuted in ${message.guild.name}.\nThis is automated message. Don't respond to it.\nHave A Nice Day :wave:`)
        message.channel.send(`${mutee.user.username} was successfully unmuted.`)
      })

      let UMembed = new Discord.RichEmbed()
      .setColor("")
      .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
      .setThumbnail(bot.user.displayAvatarURL)
      .addField("Moderation:", "Unmute")
      .addField("Muted Person:", mutee.user.username)
      .addField("Moderator:", message.author.username)
      .addField("Date:", message.createdAt.toLocaleString())

      bot.guilds.get('607885235719372801').channels.get('608577419527454730').send({embed: UMembed});

  } else {

    return message.channel.send("You don't have permission to use this command!");

  }
}

module.exports.config = {
  name: "unmute",
  aliases: ["speak"],
  usage: "u.unmute <@user>",
  description: "Unmutes Specified User.",
  //noalias: "No Aliases",
  accessableby: "Owner"

}
