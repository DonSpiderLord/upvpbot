const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.member.roles.some(r=>["Owner"].includes(r.name)) ){
      let rUser = args.slice(1).join(" ");
      let author = message.author.username;
      let reason = args.slice(2).join(" ");
      let server = args.slice(3).join(" ");
      
        message.delete()
        message.channel.send(`${rUser} was successfully reported for ${reason}.`)

        let Rembed = new Discord.RichEmbed()
        .setColor("#0890d4")
        .setAuthor(`${message.guild.name} Server Reports`, message.guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .addField("Type:", "Report")
        .addField("Reported Person:", rUser)
        .addField("Server:", server)
        .addField("Reporter:", author)
        .addField("Date:", message.createdAt.toLocaleString())

        bot.guilds.get('607885235719372801').channels.get('608577419527454730').send({embed: Rembed});
    } else if(message.member.roles.some(r=>["ReportBan"].includes(r.name)) ){

      return message.channel.send("You have been banned from using this command!");

    }
}

module.exports.config = {
  name: "report",
  aliases: ["rulebreaker"],
  usage: "u.report <user> <reason> <server>",
  description: "Reports Specified User.",
  //noalias: "No Aliases",
  accessableby: "Owner"
}
