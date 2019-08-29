const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.channel.send("Pinging...").then(m => {
    let ping = m.createdTimestamp - message.createdTimestamp
    let choices = ["Is this really my ping? :confused:", "Is it bad? I can't tell.", "Here ya go!", "Hmm, I think I did it right..."]
    let response = choices[Math.floor(Math.random() * choices.length)]

    m.edit(`${response}: Bot Latency: ${ping}, API Latency: ${Math.round(bot.ping)}`)
  })



}

module.exports.config = {
  name: "ping",
  aliases: ["latency"],
  usage: "u.ping",
  description: "Get Ping!",
  //noalias: "No Aliases",
  accessableby: "Peasant"

}
