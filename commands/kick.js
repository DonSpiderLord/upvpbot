const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.member.roles.some(r=>["Owner"].includes(r.name)) ) {
      let kickee = message.mentions.members.first() || message.guild.members.get(args[0]);
      if(!kickee) return message.channel.send("Please supply a user to kick!");

      const member = message.guild.member(kickee)
      if (kickee){
        message.delete()
        kickee.send(`Hello, you have been kicked from ${message.guild.name}.\nThis is automated message. Don't respond to it.\nHave A Nice Day :wave:`).then(() =>
        member.kick({reason: 'They were bad!',}))
        message.channel.send(`${kickee.user.username} was successfully kicked.`)

        let Kembed = new Discord.RichEmbed()
        .setColor("#bf1711")
        .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .addField("Moderation:", "Kick")
        .addField("Banned Person:", kickee.user.username)
        .addField("Moderator:", message.author.username)
        .addField("Date:", message.createdAt.toLocaleString())

        bot.guilds.get('607885235719372801').channels.get('608577419527454730').send({embed: Kembed});
      }
    } else {

        return message.channel.send("You don't have permission to use this command!");

    }
}

module.exports.config = {
  name: "kick",
  aliases: ["evict"],
  usage: "u.kick <@user>",
  description: "Kicks Specified User.",
  //noalias: "No Aliases",
  accessableby: "Owner"
}
