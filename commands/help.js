const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
const prefix = botconfig.prefix

module.exports.run = async (bot, message, args) => {
        let sEmbed = new Discord.RichEmbed()
        .setColor("#e6aa07")
        .setTitle("Help Menu")
        .setThumbnail(bot.user.displayAvatarURL)
        //.setAuthor(bot.user.username)
        .setDescription(`The bot prefix is: ${prefix}\n\nBasic Commands:\n_help_ - This menu!\n_ip_ - Shows IP's Adresses & Ports For All U-PvP Network Servers!\n_ping_ - Get Ping of server and bot.\n_report_ - Report someone who is breaking rules on server.\n_suggest_ - Make a suggestion. Not all suggestions may be realized.\nMusic Commands:\n_play_ - Plays music from YouTube.\n_skip_ - Skips the current song.\n_stop_ - Stops the music and clears the queue.\n_showsong_ - Displays the currently playing song.\n_queue_ - Displays the current song queue to the channel.\n_pause_ - Pauses the current song.\n_resume_ - Resumes a paused song.\nModeration Commands:\n_mute_ - Mutes Specified User.\n_unmute_ - Unmutes Specified User.\n_warn_ - Warns Specified User.\n_kick_ - Kicks Specified User.\n_ban_ - Bans Specified User.\n_softban_ - Bans Specified User & Deletes messages.`);
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
