const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.member.roles.some(r=>["Owner", "Co-Owner", "Manager"].includes(r.name)) ) {
      let banee = message.mentions.members.first() || message.guild.members.get(args[0]);
      if(!banee) return message.channel.send("Please supply a user to ban!");

      message.delete()
      message.channel.send(`${banee.user.username} Has Been Permanently Banned.`);

      let PBembed = new Discord.RichEmbed()
      .setColor("#991414")
      .setAuthor("U-PvP Network Modlogs")
      .addField("Moderation:", "PermBan", true)
      .addField("Banned Person:", banee, true)
      .setThumbnail(bot.user.displayAvatarURL)
      .addField("Moderator:", message.author.username, true)

      bot.guilds.get('569546798725726236').channels.get('591314683286257674').send({embed: PBembed});
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
