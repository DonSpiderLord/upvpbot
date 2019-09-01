const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
const prefix = botconfig.prefix

module.exports.run = async (bot, message, args) => {
      if(message.member.roles.some(r=>["Owner", "Co-Owner", "Manager"].includes(r.name)) ) {
        
        let unbanee = message.mentions.members.first() || message.guild.members.get(args[0]);
        let unbanperson = message.guild.member(unbanee)
        message.guild.unban(unbanperson.id);
        message.channel.send(`User ${unbanee} has been unbanned.`)
        let uEmbed = new Discord.RichEmbed()
        .setColor("#0890d4")
        .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .addField("Moderation:", "Unban")
        .addField("Unbanned ID", unbanee)
        .addField("Unbanned By:", message.author.username)
        .addField("Date:", message.createdAt.toLocaleString())

        bot.guilds.get('607885235719372801').channels.get('608577419527454730').send({embed: uEmbed});
        message.delete();
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
