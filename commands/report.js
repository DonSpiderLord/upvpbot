const Discord = require("discord.js");
const Bot = require("../bot.js");
const botconfig = require("../botconfig.json");
const prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {
    if(message.member.roles.some(r=>["Owner"].includes(r.name)) ){
      let rUser = args[0];
      let author = message.author.username;
      let reason = args[1];
      let server = args[2];

        message.delete()
        message.channel.send(`${rUser} was successfully reported.`)

        let Rembed = new Discord.RichEmbed()
        .setColor("#0890d4")
        .setAuthor(`${message.guild.name} Server Reports`, message.guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .addField("Type:", "Report")
        .addField("Reported Person:", rUser)
        .addField("Reason", reason)
        .addField("Server", server)
        .addField("Reporter:", author)
        .addField("Date:", message.createdAt.toLocaleString())

        bot.guilds.get('569546798725726236').channels.get('601215977455222794').send({embed: Rembed});
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
