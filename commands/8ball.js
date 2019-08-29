const Discord = require("discord.js")

 module.exports.run = async (bot, message, args) => {
    for(i=0;i<=args.length;i++){
     question = args.join(' ')
    }

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

    let index = Math.floor(Math.random() * (replies.length));
    let ballEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#43cf1d")
    .addField("Question", question)
    .addfield("Answer", result[index])
    message.channel.send({embed: ballEmbed});
    message.delete();
 }

    module.exports.config = {
        name: "8ball",
        aliases: ["balloftruth"],
        usage: "u.8ball",
        description: "8-Ball Of Truth.",
        //noalias: "No Aliases",
        accessableby: "Anyone"
    }
