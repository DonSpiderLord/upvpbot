const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.member.roles.some(r=>["Owner"].includes(r.name)) ) {
      let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
      if(!mutee) return message.channel.send("Please supply a user to mute!");

      let reason = args.slice(1).join(" ");
      if(!reason) reason = "Please supply a reason to mute!"

      let muterole = message.guild.roles.find(r => r.name === "Muted")
      if(!muterole) return message.channel.send("There is no mute role!");

      mutee.removeRole(muterole.id).then(() => {
        message.delete()
        mutee.send(`Hello, you have been unmuted in ${message.guild.name} for: ${reason}`)
        message.channel.send(`${mutee.user.username} was successfully unmuted.`)
      })

      let embed = new Discord.RichEmbed()
      .setColor("")
      .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
      .addField("Moderation:", "Unmute")
      .addField("Muted Person:", mutee.user.username)
      .addField("Moderator:", message.author.username)
      .addField("Reason:", reason)
      .addField("Date:", message.createdAt.toLocaleString())

      let sChannel = message.guild.channels.find(c => c.name === "mod-logs")
      sChannel.send(embed)

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
