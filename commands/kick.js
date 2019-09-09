const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.member.roles.some(r=>["Owner", "Co-Owner", "Manager", "Admin", "Mod+", "Mod"].includes(r.name)) ) {
      let kickee = message.mentions.members.first() || message.guild.members.get(args[0]);
      if(!kickee) return message.channel.send("Please supply a user to kick!");

      const member = message.guild.member(kickee)
      if (kickee){
        message.delete()
        member.kick({reason: 'Kick From U-Pvp Network!',});
        message.channel.send(`${kickee.user.username} was successfully kicked.`)

        let Kembed = new Discord.RichEmbed()
        .setColor("#181473")
        .setAuthor("U-PvP Network Modlogs")
        .addField("Moderation:", "Kick", true)
        .addField("Kicked Person:", kickee, true)
        .setThumbnail(bot.user.displayAvatarURL)
        .addField("Moderator:", message.author.username, true)

        bot.guilds.get('569546798725726236').channels.get('591314683286257674').send({embed: Kembed});
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
