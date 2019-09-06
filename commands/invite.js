const Discord = require("discord.js");

 module.exports.run = async (bot, message, args) => {
    message.channel.send("Hi, The Link To This Server Is: discord.gg/8hCeYgc\nInvite Someone Cool!");
 }

 module.exports.config = {
   name: "invite",
   aliases: ["invitation"],
   usage: "u.invite",
   description: "Invite link",
   //noalias: "No Aliases",
   accessableby: "Everyone"
 }
