const Discord = require("discord.js");
const badwords = require("./badwords.json");
var profanities = badwords.profanities;

module.exports = async (client) => {
    client.on("languagefilter", async (message) => {
      
      for (x = 0; x < profanities.length; x++) {
            if (message.content.includes(profanities[x])){
                await message.reply("Don't say that here! :angry:")     

                let ChatFilterEmbed = new Discord.RichEmbed()
                .setColor("#bf1711")
                .setTitle(`${message.author.username} Has Been Warned For Language!`);
                message.channel.send({embed: ChatFilterEmbed});  
                  //message.delete();

                let ChatFilterModEmbed = new Discord.RichEmbed()
                .setColor("#bf1711")
                .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
                .setThumbnail(bot.user.displayAvatarURL)
                .addField("Moderation:", "Warn")
                .addField("Warned Person:", message.author.username)
                .addField("Reason:", "Language")
                .addField("Moderator:", bot.user.username)
                .addField("Date:", message.createdAt.toLocaleString())

                bot.guilds.get('607885235719372801').channels.get('608577419527454730').send({embed: ChatFilterModEmbed});
                return;     
      }
    }
  }
}
