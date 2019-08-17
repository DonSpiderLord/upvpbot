const Discord = require("discord.js");
const Bot = require("../bot.js");
const botconfig = require("../botconfig.json");
const prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {
    if(message.member.roles.some(r=>["Owner"].includes(r.name)) ){
      let suggestion = args;
      let author = message.author.username;

        message.delete()
        message.channel.send(`Your suggestion has been recorded!`)
        message.channel.send(suggestion)

        let Rembed = new Discord.RichEmbed()
        .setColor("#13edc5")
        .setAuthor(`${message.guild.name} Suggestions`, message.guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .addField("Type:", "Suggestion")
        .addField("Suggestion:", suggestion)
        .addField("Reporter:", author)
        .addField("Date:", message.createdAt.toLocaleString())

        bot.guilds.get('607885235719372801').channels.get('608645820287418394').send({embed: Rembed});
        await embed: Rembed.react('👍')
        await embed: Rembed.react('👎')
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
