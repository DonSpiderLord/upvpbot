const Discord = require("discord.js");
var ffmpeg = require('ffmpeg-static');
console.log(ffmpeg.path);

module.exports.run = async (bot, message, args) => {
        if(message.member.voiceChannel){

          if(!message.guild.voiceConnection){
            message.member.voiceChannel.join()
                .then(connection => {
                    message.reply("Succesfully Joined Voice Channel");
                })
          }
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
