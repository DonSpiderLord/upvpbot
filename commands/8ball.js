const Discord = require("discord.js")

 module.exports.run = async (bot, message, args) => {
    for(i=0;i<=args.length;i++){
     question = args.join(' ')
    }

    const replies = [
      "Yes",
      "No",
      "Absolutely!",
      "I don't know!",
      "Ask again later! I'll tell you.",
      "Leave me alone! I don't know!",
      "I am not sure",
      "Pls no questions",
      "IDK, You tell me.",
      "Without a doubt",
      "Cannot predict now",
      "Without a doubt"
    ]

    let index = Math.floor(Math.random() * (replies.length));
  
    let ballEmbed = new Discord.RichEmbed()
    .setColor("#43cf1d")
    .addField("Question", question)
    .addField("Answer", replies[index])
    
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
