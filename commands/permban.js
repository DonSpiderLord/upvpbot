const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.member.roles.some(r=>["Owner", "Co-Owner", "Manager"].includes(r.name)) ) {
      let banee = message.mentions.members.first() || message.guild.members.get(args[0]);
      if(!banee) return message.channel.send("Please supply a user to ban!");

      message.delete()
      banee.send(`Hello, you have been banned from ${message.guild.name}.\nThis is automated message. Don't respond to it.\nHave A Nice Day :wave:\n===============`);
      message.channel.send(`${banee.user.username} Has Been Succesfully Banned.`);

      let Bembed = new Discord.RichEmbed()
      .setColor("#0890d4")
      .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
      .setThumbnail(bot.user.displayAvatarURL)
      .addField("Moderation:", "Permanent Ban")
      .addField("Banned Person:", banee.user.username)
      .addField("Moderator:", message.author.username)
      .addField("Date:", message.createdAt.toLocaleString())

      bot.guilds.get('607885235719372801').channels.get('608577419527454730').send({embed: Bembed});
      banee.ban();

  } else {

  message.channel.send("You don't have permission to use this command!")

}
}

module.exports.config = {
  name: "permban",
  aliases: ["banish"],
  usage: "u.permban <@user>",
  description: "Bans Specified User Permanently.",
  //noalias: "No Aliases",
  accessableby: "Owner"
}
