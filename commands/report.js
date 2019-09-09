const Discord = require("discord.js");
const Bot = require("../bot.js");
const botconfig = require("../botconfig.json");
const prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {
    if(message.member.roles.some(r=>["Owner"].includes(r.name)) ){
      let author = message.author.username;
      let rUser = args[0];
       if(!rUser) return message.channel.send("Please supply a user to report!");
      let reason = args[1];
       if(!reason) server = "Not Defined";
      let server = args[2];
       if(!server) server = "Not Defined";

        message.delete()
        message.channel.send(`${rUser} was successfully reported.`)

        let Rembed = new Discord.RichEmbed()
        .setColor("#ffbb00")
        .setAuthor("U-PvP Network Reports")
        .setThumbnail(bot.user.displayAvatarURL)
        .addField("Reported Person:", rUser)
        .addField("Reason", reason)
        .addField("Server", server)
        .addField("Reported By:", author)

        bot.guilds.get('569546798725726236').channels.get('619571632553590825').send({embed: Rembed});

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
