const Discord = require("discord.js");
const Bot = require("../bot.js");
const botconfig = require("../botconfig.json");
const prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {
    if(message.member.roles.some(r=>["Owner"].includes(r.name)) ){
      let author = message.author.username;
      for(i=0;i<=args.length;i++){
      suggestion = args.join(' ')
      }

        message.delete()
        message.channel.send(`Your suggestion has been recorded! Vote in #suggestions!`)

        let Sembed = new Discord.RichEmbed()
        .setColor("#13edc5")
        .setAuthor(`${message.guild.name} Suggestions`, message.guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .addField("Suggestion:", suggestion)
        .addField("Suggested By:", author)

        bot.guilds.get('607885235719372801').channels.get('608645820287418394').send({embed: Sembed}).then(embedMessage => {
          embedMessage.react('✅')
		  .then(() => embedMessage.react('❌'))
        });

    } else if(message.member.roles.some(r=>["SuggestionBan"].includes(r.name)) ){

      return message.channel.send("You have been banned from using this command!");

    }
}

module.exports.config = {
  name: "suggest",
  aliases: ["idea"],
  usage: "u.suggest <suggestion>",
  description: "Sends suggestion to suggestion channel.",
  //noalias: "No Aliases",
  accessableby: "Owner"
}
