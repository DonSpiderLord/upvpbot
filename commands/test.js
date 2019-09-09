const Discord = require("discord.js");

 module.exports.run = async (bot, message, args) => {
    message.channel.send("Test, Test. Bleep Bloop. Bot Is Online.");
 }

 module.exports.config = {
   name: "test",
   aliases: ["testing"],
   usage: "u.test",
   description: "Test.",
   //noalias: "No Aliases",
   accessableby: "Everyone"
 }
