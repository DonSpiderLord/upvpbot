const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.member.roles.some(r=>["Owner"].includes(r.name)) ) {
      let bannedMember = await bot.fetchUser(args[0])
        if(!bannedMember) return message.channel.send("Please provide a user to unban!")
      let reason = "Unban In U-PvP Network Discord"
      message.delete()
      try {
        message.guild.unban(bannedMember, {reason: reason})
        message.channel.send(`${bannedMember.tag} has been successfully unbanned.`)
      } catch(e){
        console.log(e.message)
      }

      let Membed = new Discord.RichEmbed()
      .setColor("#0890d4")
      .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
      .setThumbnail(bot.user.displayAvatarURL)
      .addField("Moderation:", "Unban")
      .addField("Unbanned Person:", `${bannedMember.username} (${bannedMember.id})`)
      .addField("Moderator:", message.author.username)
      .addField("Date:", message.createdAt.toLocaleString())

      bot.guilds.get('607885235719372801').channels.get('608577419527454730').send({embed: Membed});

  } else {

        return message.channel.send("You don't have permission to use this command!");

    }
}

module.exports.config = {
  name: "unban",
  aliases: ["forgive"],
  usage: "u.unban <@user>",
  description: "Unbans Specified User.",
  //noalias: "No Aliases",
  accessableby: "Owner"
}
