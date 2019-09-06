const Discord = require("discord.js")

 module.exports.run = async (bot, message, args) => {
    for(i=0;i<=args.length;i++){
     text = args.join(' ')
    }
    reverse(text) {
      if (text === "")
        return "";
       else
        return reverse(text.substr(1)) + text.charAt(0);
      
    }
 }

    module.exports.config = {
        name: "reverse",
        aliases: ["r"],
        usage: "u.reverse",
        description: "Reverse text.",
        //noalias: "No Aliases",
        accessableby: "Anyone"
    }

