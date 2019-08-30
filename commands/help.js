const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
const prefix = botconfig.prefix

module.exports.run = async (bot, message, args) => {
        let sEmbed = new Discord.RichEmbed()
        .setColor("#e6aa07")
        .setTitle("Help Menu")
        .setThumbnail(bot.user.displayAvatarURL)
        //.setAuthor(bot.user.username)
        .setDescription(`The bot prefix is: ${prefix}\n\n**:thinking: Basic Commands: :thinking:**\n_u.help_ - This menu!\n_u.ip_ - Shows IP's Adresses & Ports For All U-PvP Network Servers!\n_u.ping_ - Get Ping!.\n_u.uptime_ - Gets Time That The Bot Is Online.\n_u.report_ - Report someone who is breaking rules on server.\n_u.suggest_ - Make a suggestion. Not all suggestions may be realized.\n===================\n**:oncoming_police_car: Moderation Commands: :oncoming_police_car:**\n_u.tempmute_ - Mutes Specified User For Specified Time.\n_u.permmute_ - Mutes Specified User Till Unmuted.\n_u.unmute_ - Unmutes Specified User.\n_u.warn_ - Warns Specified User.\n_u.kick_ - Kicks Specified User.\n_u.ban_ - Bans Specified User.\n_u.purge_ - Deletes Big Amount Of Messages (Max 100).\n===================\n**:100: Fun & Random Commands :100:**\n_u.quote_ - Random Quote Or Joke\n_u.8ball_ - Ask A Question And Get Answer From 8 Ball Of Truth.\n_u.emoji_ - Get Random ASCII Emoji\n\nThis Bot Is Still Under Development - Send Bugs And Suggestions To @DonSpiderLord#2408`);
        message.channel.send({embed: sEmbed});
    }

module.exports.config = {
  name: "help",
  aliases: ["h", "helpme"],
  usage: "u.help",
  description: "Help Command",
  //noalias: "No Aliases",
  accessableby: "Peasant"
}
