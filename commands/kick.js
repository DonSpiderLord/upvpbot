const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.member.roles.some(r=>["Owner", "Co-Owner", "Manager", "Admin", "Mod+", "Moderator"].includes(r.name)) ) {
      let kickee = message.mentions.members.first() || message.guild.members.get(args[0]);
      if(!kickee) return message.channel.send("Please supply a user to kick!");

      const member = message.guild.member(kickee)
      if (kickee){
        message.delete()
        member.kick({reason: 'Kick From U-Pvp Network!',});
        message.channel.send(`${kickee.user.username} was successfully kicked.`)

        let Bembed = new Discord.RichEmbed()
        .setColor("#0890d4")
        .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .addField("Moderation:", "Kick")
        .addField("Banned Person:", kickee.user.username)
        .addField("Moderator:", message.author.username)
        .addField("Date:", message.createdAt.toLocaleString())

        bot.guilds.get('607885235719372801').channels.get('608577419527454730').send({embed: Bembed});
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
