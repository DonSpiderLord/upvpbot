const Discord = require("discord.js");
const YTDL = require("ytdl-core-discord);

function Play(connection, message){
  var server = servers[message.guild.id];
  server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: audioonly}));
  server.queue.shift();
  server.dispatcher.on("end", function(){
    if(server.queue[0]){
      Play(connection, message);
    } else {
      connection.disconnect();
    }
  });
}

module.exports.run = async (bot, message, args) => {
        if(message.member.voiceChannel){

          if(!message.guild.voiceConnection){

            if(!servers[message.guild.id]){
              servers[message.guild.id] = {queue: []}
            }
            message.member.voiceChannel.join()
                .then(connection => {
                    var server = servers[message.guild.id];
                    message.reply("Succesfully Joined Voice Channel");
                    server.queue.push(args);
                    Play(connection, message);
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
