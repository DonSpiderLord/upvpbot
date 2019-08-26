const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports = {
	name: 'suggest',
	description: 'Suggestion Command',
	execute(message, args) {
		
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
        .addField("Suggestion:", suggestion)
        .addField("Suggested By:", author)

        bot.channels.get('608645820287418394').send({embed: Sembed}).then(embedMessage => {
        embedMessage.react("👍");
        embedMessage.react("👎");
        });

    } else if(message.member.roles.some(r=>["SuggestionBan"].includes(r.name)) ){

      return message.channel.send("You have been banned from using this command!");

    }
	},
};
