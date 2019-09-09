const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.member.roles.some(r=>["Owner", "Co-Owner", "Manager", "Admin", "Mod+", "Moderator", "Trial-Mod"].includes(r.name)) ) {

    let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!mutee) return message.channel.send("Please supply a user to mute!");

    let time = args[1];
    if(time > 12) return message.channel.send("Max Mute Time Is 12 Hours");
    if(!time) return message.channel.send("Please Supply Mute Duration");
    let muterole = message.guild.roles.find(r => r.name === "Muted");

    mutee.addRole(muterole.id).then(() => {
      message.delete()
      message.channel.send(`${mutee.user.username} Has Been Muted For ${time} Hours! :mute:`);

      setTimeout(() => {
            if(message.member.roles.some(r=>["Muted"].includes(r.name)) ) {
                message.member.removeRole(muterole);
                message.channel.send(`${message.author.username} Has Been Unmuted. :sound:`);
            } else {
                console.log(`Tried Unmuting a user ${mutee.user.username}, but user was already unmuted!`);
            }
         }, time * 3600000);
    })

    let TBembed = new Discord.RichEmbed()
    .setColor("#2450b5")
    .setAuthor("U-PvP Network Modlogs")
    .addField("Moderation:", "TempMute", true)
    .addField("Banned Person:", mutee, true)
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("Moderator:", message.author.username, true)
    .addField("Time:", time, true)

    bot.guilds.get('569546798725726236').channels.get('591314683286257674').send({embed: Membed});

} else {

    return message.channel.send("You don't have permission to use this command!");

  }
}


module.exports.config = {
  name: "tempmute",
  aliases: ["tempnospeak"],
  usage: "u.tempmute <@user>",
  description: "Mutes Specified User For Specific Time.",
  //noalias: "No Aliases",
  accessableby: "Owner"

}
