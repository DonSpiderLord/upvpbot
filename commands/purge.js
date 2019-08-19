const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const amount = args[1];
    if (!amount) return message.reply('You must specify an amount to delete!');

    message.channel.fetchMessages({
     limit: 100,
   }).then((messages) => {
      message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
 });
}

module.exports.config = {
  name: "purge",
  aliases: ["bulkdelete"],
  usage: "u.purge <messageCount>",
  description: "Deletes Lots Of Messages (MAX 100).",
  //noalias: "No Aliases",
  accessableby: "Owner"
}
