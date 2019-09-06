const Discord = require("discord.js")

 module.exports.run = async (bot, message, args) => {
    for(i=0;i<=args.length;i++){
     text = args.join(' ')
    }
    var result = text.toUpperCase();
    message.channel.send(result);
 }

    module.exports.config = {
        name: "bigtext",
        aliases: ["bigfont"],
        usage: "u.bigtext",
        description: "Makes text lot bigger.",
        //noalias: "No Aliases",
        accessableby: "Anyone"
    }
