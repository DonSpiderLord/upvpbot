const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.member.roles.some(r=>["Owner", "Co-Owner", "Manager", "Admin"].includes(r.name)) ) {

    let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!mutee) return message.channel.send("Please supply a user to mute!");

    let muterole = message.guild.roles.find(r => r.name === "Muted");

    mutee.addRole(muterole.id).then(() => {
      message.delete();
      message.channel.send(`${mutee.user.username} Has Been Permanently Muted! :mute:`);
    })

    let PMembed = new Discord.RichEmbed()
    .setColor("#2450b5")
    .setAuthor("U-PvP Network Modlogs")
    .addField("Moderation:", "PermMute", true)
    .addField("Muted Person:", mutee, true)
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("Moderator:", message.author.username, true)

    bot.guilds.get('569546798725726236').channels.get('591314683286257674').send({embed: PMembed});

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
