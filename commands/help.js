const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
const prefix = botconfig.prefix

module.exports.run = async (bot, message, args) => {
      let command = args[0];
      if(bot.commands.has(command)) {
        command = bot.commands.get(command);
        var SHembed = new Discord.RichEmbed()
        .setColor("#e6aa07")
        .setAuthor(`U-PvP Discord Admin Help`, message.guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .setDescription(`The bot prefix is: ${prefix}\n\nAvailable Commands:\n_help_ - This menu!`)
        message.channel.send(SHembed);
    }

    }

module.exports.config = {
  name: "help",
  aliases: ["h", "helpme"],
  usage: "u.help",
  description: "Help Command",
  //noalias: "No Aliases",
  accessableby: "Peasant"
}
