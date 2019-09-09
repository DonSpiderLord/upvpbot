const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.member.roles.some(r=>["Owner", "Co-Owner", "Manager", "Admin"].includes(r.name)) ) {
        const amount = args[0];
        if (!amount) return message.reply('You must specify an amount to delete! (Min: 2 Max: 100)');
        message.channel.fetchMessages({
        limit: 100,
        }).then((messages) => {
        message.channel.bulkDelete(amount).catch(error => console.log(error.stack));

        let purgeEmbed = new Discord.RichEmbed()
        .setColor("#2450b5")
        .setAuthor("U-PvP Network Modlogs")
        .addField("Moderation:", "Purge", true)
        .addField("Messages Deleted:", amount, true)
        .setThumbnail(bot.user.displayAvatarURL)
        .addField("Moderator:", message.author.username, true)

        bot.guilds.get('569546798725726236').channels.get('591314683286257674').send({embed: purgeEmbed});
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
