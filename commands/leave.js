const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
          if(message.guild.voiceConnection){
            message.member.voiceConnection.disconnect();
          } else {
                message.reply("I must be in voice channel to leave it!");
          }
}

module.exports.config = {
  name: "leave",
  aliases: ["disconnect"],
  usage: "u.leave",
  description: "Leave voice channel!",
  //noalias: "No Aliases",
  accessableby: "Anyone"
}
