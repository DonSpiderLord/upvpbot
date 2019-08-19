const Discord = require("discord.js");
const opus = require("node-opus");
const ffmpeg = require("ffmpeg");

module.exports.run = async (bot, message, args) => {
        if(message.member.voiceChannel){
          if(!message.guild.voiceConnection){
            message.member.voiceChannel.leave()
                .then(connection => {
                    message.reply("Succesfully Left Voice Channel");
                })
          }
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
