const Discord = require("discord.js");
const Bot = require("../bot.js");
const botconfig = require("../botconfig.json");
const prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {
    if(message.member.roles.some(r=>["Owner", "Co-Owner", "Manager", "Admin", "Mod+", "Mod", "Trial-Mod", "Helper", "Peasant", "PvP God"].includes(r.name)) ){
      let author = message.author.username;
      for(i=0;i<=args.length;i++){
      suggestion = args.join(' ')
      }

        message.delete()
        message.channel.send(`Your suggestion has been recorded! Vote in #suggestions!`)

        let Sembed = new Discord.RichEmbed()
        .setColor("#ffffff")
        .setAuthor("U-PvP Network Suggestions")
        .setThumbnail(bot.user.displayAvatarURL)
        .addField("Suggestion:", suggestion)
        .addField("Suggested By:", author)

        bot.guilds.get('569546798725726236').channels.get('585062018286092299').send({embed: Sembed}).then(embedMessage => {
          embedMessage.react('✅')
		  .then(() => embedMessage.react('❌'))
        });

    } else if(message.member.roles.find(r=>["SuggestionBan"].includes(r.name)) ){

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
