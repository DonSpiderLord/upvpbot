const Discord = require("discord.js");
const Bot = require("../bot.js");
const botconfig = require("../botconfig.json");
const prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {
    if(message.member.roles.some(r=>["Owner"].includes(r.name)) ){
      let author = message.author.username;
      for(i=0;i<=args.length;i++){
      bugReport = args.join(' ')
      }

        message.delete()
        message.channel.send(`Your bug report has been recorded! Thanks!`)

        let bRembed = new Discord.RichEmbed()
        .setColor("#13edc5")
        .setAuthor(`Bug Report`, message.guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .addField("Bug:", bugReport)
        .addField("Reported By:", author)

        bot.guilds.get('607885235719372801').channels.get('617745698783363072').send({embed: bRembed});

    } else if(message.member.roles.some(r=>["SuggestionBan"].includes(r.name)) ){

      return message.channel.send("You have been banned from using this command!");

    }
}

module.exports.config = {
  name: "reportbug",
  aliases: ["bug"],
  usage: "u.reportbug <suggestion>",
  description: "Reports bug to bugs channel.",
  //noalias: "No Aliases",
  accessableby: "Owner"
}
