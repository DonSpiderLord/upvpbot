const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.member.roles.some(r=>["Owner", "Co-Owner", "Manager", "Admin", "Mod+"].includes(r.name)) ) {
      let banee = message.mentions.members.first() || message.guild.members.get(args[0]);
      if(!banee) return message.channel.send("Please supply a user to ban!");
      let baneeID = banee.user.id;
      
      let time = args[1];
      if(time > 48) return message.channel.send("Max ban time is 48 Hours!");
      if(!time) return message.channel.send("Please supply how long the person will be banned!");
      
      message.delete();
      message.channel.send(`${banee.user.username} Has Been Banned For ${time} Hours.`);

      let Bembed = new Discord.RichEmbed()
      .setColor("#0890d4")
      .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
      .setThumbnail(bot.user.displayAvatarURL)
      .addField("Moderation:", "Permanent Ban")
      .addField("Banned Person:", banee.user.username)
      .addField("Moderator:", message.author.username)
      .addField("Date:", message.createdAt.toLocaleString())

      bot.guilds.get('569546798725726236').channels.get('619567070329438229').send({embed: Bembed});
      banee.ban();
      setTimeout(() => {message.guild.unban(banee)}, time * 3600000);
      setTimeout(() => {message.channel.send(`${banee.user.username} Has Been Unbanned.`)}, time * 3600000);

  } else {

  message.channel.send("You don't have permission to use this command!")

}
}

module.exports.config = {
  name: "tempban",
  aliases: ["tempbanish"],
  usage: "u.tempban <@user>",
  description: "Bans Specified User Permanently.",
  //noalias: "No Aliases",
  accessableby: "Owner"
}
