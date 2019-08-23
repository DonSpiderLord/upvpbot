const Discord = require("discord.js")

 module.exports.run = async (bot, message, args) => {

    if(!args[0]) return message.reply("Plesae enter a full question with 2 or more words!");
    const replies = [
      "Yes",
      "No",
      "I don't know!",
      "Ask again later!",
      "Leave me alone!",
      "I am not sure",
      "Pls no",
      "You tell me.",
      "Without a doubt",
      "Cannot predict now",
      "Without a doubt"
    ]
  
    let result = Math.floor((Math.random() * replies.length));
    for(i=0;i<=args.length;i++){
    question = args.join(' ')
    }

    let index = Math.floor(Math.random() * (replies.length));
    let ballEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#43cf1d")
    .addField("Question", question)
    .addfield("Answer", result[index])
    message.channel.send({embed: repliesEmbed});
    message.delete();

 }

    module.exports.help = {
        name: "eightball",
        aliases: ["balloftruth"],
        usage: "u.eightball",
        description: "8-Ball Of Truth.",
        //noalias: "No Aliases",
        accessableby: "Anyone"
    }
