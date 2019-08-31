const Discord = require("discord.js");
const xp = require("../xp.json");

module.exports.run = async (bot, message, args) => {

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }

let curxp = xp[message.author.id].xp;
let curlvl = xp[message.author.id].level;
let nxtlvl = xp[message.author.id].level * 500;
let diff = nxtlvl - curxp;


let lvlEmbed = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setColor("#ffffff")
.addField("Current Level", curlvl, true)
.addField("Current XP", curxp, true)
.setFooter(`${diff} XP To Level Up`, message.author.displayAvatarURL)

message.channel.send({embed: lvlEmbed});

}

module.exports.config = {
    name: "xp",
    aliases: ["level"],
    usage: "u.xp",
    description: "Get Your XP",
    //noalias: "No Aliases",
    accessableby: "Anyone"
}
