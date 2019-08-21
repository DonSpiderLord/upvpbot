const Discord = require("discord.js")

 module.exports.run = async (bot, message, args) => {

    if(!args[0]) return message.reply("Plesae enter a full question with 2 or more words!");
    let replies = ["Yes", "No", "I don't know", "Ask again later!", "Leave me alone!", "I am not sure!", "Pls No", "You tell me", "Without a doubt", "Cannot predict now", "Without a doubt", ];

    let result = Math.floor((Math.random() * replies.length));
    for(i=0;i<=args.length;i++){
    question = args.join(' ')
    }

    let ballembed = new Discord.RichEmbed()

    .setAuthor(message.author.username)
    .setColor("#00ff00")
    .addField("Question", question)
    .addField("Answer", replies[result]);

    message.channel.send(ballembed)

    message.delete();


 }

    module.exports.help = {
        name: "8ball",
        aliases: ["balloftruth"],
        usage: "u.8ball",
        description: "8 Ball Of Truth.",
        //noalias: "No Aliases",
        accessableby: "Anyone"
    }
