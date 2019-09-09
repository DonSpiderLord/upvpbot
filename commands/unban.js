const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
const prefix = botconfig.prefix

module.exports.run = async (bot, message, args) => {
      if(message.member.roles.some(r=>["Owner", "Co-Owner", "Manager"].includes(r.name)) ) {

        let user = args[0];
        if(!user) return message.channel.send("Please supply a user to unban.");

        message.guild.fetchBans()
        .then(bans => {
             message.guild.unban(user);
             message.channel.send("Specified User Was Unbanned.")

             let unbanEmbed = new Discord.RichEmbed()
             .setColor("#2450b5")
             .setAuthor("U-PvP Network Modlogs")
             .addField("Moderation:", "Unban", true)
             .addField("Unbanned Person:", mutee, true)
             .setThumbnail(bot.user.displayAvatarURL)
             .addField("Moderator:", message.author.username, true)
             .addField("Time:", time, true)
             bot.guilds.get('569546798725726236').channels.get('591314683286257674').send({embed: unbanEmbed});
        });
   } else {
        return message.channel.send("You don't have permission to use this command!");
   }
}

module.exports.config = {
  name: "unban",
  aliases: ["unbanid"],
  usage: "u.unban",
  description: "Unbans ID",
  //noalias: "No Aliases",
  accessableby: "Staff"
}
