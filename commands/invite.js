const Discord = require("discord.js");

 module.exports.run = async (bot, message, args) => {
    let IEmbed = new Discord.RichEmbed()
    .setColor("#ffffff")
    .setTitle("Invite Link")
    .setDescription("Hi, The Link To This Server Is: **discord.gg/8hCeYgc**\nInvite Someone Cool!");
    message.channel.send({embed: IEmbed});
 }

 module.exports.config = {
   name: "invite",
   aliases: ["invitation"],
   usage: "u.invite",
   description: "Invite link",
   //noalias: "No Aliases",
   accessableby: "Everyone"
 }
