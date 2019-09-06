const Discord = require("discord.js")

 module.exports.run = async (bot, message, args) => {
    for(i=0;i<=args.length;i++){
     text = args.join(' ')
    }
    funtion reverseString(text) {
      if (text === ""){
        reverse "";
      } else {
        return reverseString(text.substr(1)) + text.charAt(0);
      }
    }
    message.channel.send(reverseString);
 }

    module.exports.config = {
        name: "bigtext",
        aliases: ["bigfont"],
        usage: "u.bigtext",
        description: "Makes text lot bigger.",
        //noalias: "No Aliases",
        accessableby: "Anyone"
    }
