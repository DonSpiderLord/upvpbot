const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        if(message.member.voiceChannel){

          if(!message.guild.voiceConnection){
            message.member.voiceChannel.join()
                .then(connection => {
                    message.reply("Succesfully Joined Voice Channel");
                })
          }
        } else {
          message.reply("You must be in a voice channel to summon me!")
        }
        
}

module.exports.config = {
  name: "join",
  aliases: ["connect"],
  usage: "u.join",
  description: "Join voice channel!",
  //noalias: "No Aliases",
  accessableby: "Anyone"
}
