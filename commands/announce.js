const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.member.roles.some(r=>["Owner", "Co-Owner", "Manager"].includes(r.name)) ) {   
    let text = args;
    for (i = 0; i <= args.length; i++){
       text = args.join(' ');  
    }
    message.delete();
    bot.guilds.get('569546798725726236').channels.get('579430209833402368').send(text);
  } else {
    return message.channel.send("You don't have permission to use this command!");
  }
}

module.exports.config = {
  name: "announce",
  aliases: ["importantmsg"],
  usage: "u.announce <message>",
  description: "Sends message as bot in announcements.",
  //noalias: "No Aliases",
  accessableby: "Manager and Above"
}
