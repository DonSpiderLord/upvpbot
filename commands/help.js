const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
const prefix = botconfig.prefix

module.exports.run = async (bot, message, args) => {
        let sEmbed = new Discord.RichEmbed()
        .setColor("#e6aa07")
        .setTitle("Help Menu")
        .setThumbnail(bot.user.displayAvatarURL)
        //.setAuthor(bot.user.username)
        .setDescription(`The bot prefix is: ${prefix}\n\n**:upside_down: Basic Commands:**\n_u.help_ - This menu!\n_u.ip_ - Shows IP's Adresses & Ports For All U-PvP Network Servers!\n_u.ping_ - Get Ping!.\n_u.report_ - Report someone who is breaking rules on server.\n_u.suggest_ - Make a suggestion. Not all suggestions may be realized.\n===================\n**:musical_note: Music Commands:**\n_u.play_ - Plays music from YouTube.\n_u.skip_ - Skips the current song.\n_u.stop_ - Stops the music and clears the queue.\n_u.showsong_ - Displays the currently playing song.\n_u.queue_ - Displays the current song queue to the channel.\n_u.pause_ - Pauses the current song.\n_u.resume_ - Resumes a paused song.\n===================\n**:hammer: Moderation Commands:**\n_u.mute_ - Mutes Specified User.\n_u.unmute_ - Unmutes Specified User.\n_u.warn_ - Warns Specified User.\n_u.kick_ - Kicks Specified User.\n_u.ban_ - Bans Specified User.\n_u.softban_ - Bans Specified User & Deletes messages.`);
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
