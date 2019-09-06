const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.channel.send("Inicializing setup...");
  setTimeout(() => {message.edit("Setup In Progress\n===============\n:black_square_button: :black_square_button: :black_square_button: :black_square_button: :black_square_button: :black_square_button:\nExtracting Commands...\n===============")}, 5 * 1000);
  setTimeout(() => {message.edit("Setup In Progress\n===============\n:white_check_mark: :black_square_button: :black_square_button: :black_square_button: :black_square_button: :black_square_button:\nSetting Up Modules...\n===============")}, 10 * 1000);
}

module.exports.config = {
  name: "setup",
  aliases: ["extractmodules"],
  usage: "u.setup",
  description: "SETUP MODULES AND COMMANDS",
  //noalias: "No Aliases",
  accessableby: "Peasant"

}
