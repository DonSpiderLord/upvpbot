const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.member.roles.some(r=>["Owner", "Co-Owner", "Manager", "Admin", "Mod+"].includes(r.name)) ) {   
    let text = args;
    for (i = 0; i <= args.length; i++){
       text = args.join(' ');  
    }
    
    message.channel.send(text);
  } else {
    return message.channel.send("You don't have permission to use this command!");
  }
}

module.exports.config = {
  name: "say",
  aliases: ["sendmsg"],
  usage: "u.say <message>",
  description: "Kicks Specified User.",
  //noalias: "No Aliases",
  accessableby: "Mod+ and Above"
}
