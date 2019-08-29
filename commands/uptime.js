const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let time = bot.uptime;
    let totalSeconds = (time / 1000);
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    let uptime = `Bot has been up for ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
    message.channel.send(uptime);
}

module.exports.config = {
  name: "uptime",
  aliases: ["onlinetime"],
  usage: "u.uptime",
  description: "Shows Current Uptime Of Bot!",
  //noalias: "No Aliases",
  accessableby: "Anyone"
}
