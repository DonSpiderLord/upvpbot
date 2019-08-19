const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.member.roles.some(r=>["Owner"].includes(r.name)) ) {
        const amount = args[0];
        if (!amount) return message.reply('You must specify an amount to delete! (Min: 2 Max: 100)');
        message.channel.fetchMessages({
        limit: 100,
        }).then((messages) => {
        message.channel.bulkDelete(amount).catch(error => console.log(error.stack));
 });

 } else {

    return message.channel.send("You don't have permission to use this command!");

}
}
module.exports.config = {
  name: "purge",
  aliases: ["bulkdelete"],
  usage: "u.purge <messageCount>",
  description: "Deletes Lots Of Messages (MAX 100).",
  //noalias: "No Aliases",
  accessableby: "Owner"
}
