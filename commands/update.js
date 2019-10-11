const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(message.member.roles.some(r=>["Owner", "Co-Owner", "Manager"].includes(r.name)) ) {
  message.delete();
  message.channel.send("**Update In Progress**\n========================\n:black_square_button: :black_square_button: :black_square_button: :black_square_button: :black_square_button: :black_square_button: :black_square_button: :black_square_button:\nInitializing Update...\n========================").then(m => {
  setTimeout(() => {m.edit("**Update In Progress**\n========================\n:white_check_mark: :black_square_button: :black_square_button: :black_square_button: :black_square_button: :black_square_button: :black_square_button: :black_square_button:\nExtracting Modules...\n========================")}, 5 * 1000);
  setTimeout(() => {m.edit("**Update In Progress**\n========================\n:white_check_mark: :white_check_mark: :black_square_button: :black_square_button: :black_square_button: :black_square_button: :black_square_button: :black_square_button:\nUpdating Discord JS To 11.5.1...\n========================")}, 8 * 1000);
  setTimeout(() => {m.edit("**Update In Progress**\n========================\n:white_check_mark: :white_check_mark: :white_check_mark: :black_square_button: :black_square_button: :black_square_button: :black_square_button: :black_square_button:\nUpdating Spam & Language Filters...\n========================")}, 14 * 1000);
  setTimeout(() => {m.edit("**Update In Progress**\n========================\n:white_check_mark: :white_check_mark: :white_check_mark: :white_check_mark: :black_square_button: :black_square_button: :black_square_button: :black_square_button:\nGetting Additional Binaries...\n========================")}, 17 * 1000);
  setTimeout(() => {m.edit("**Update In Progress**\n========================\n:white_check_mark: :white_check_mark: :white_check_mark: :white_check_mark: :white_check_mark: :black_square_button: :black_square_button: :black_square_button:\Searching For Additional Updates...\n========================")}, 19 * 1000);
  setTimeout(() => {m.edit("**Update In Progress**\n========================\n:white_check_mark: :white_check_mark: :white_check_mark: :white_check_mark: :white_check_mark: :white_check_mark: :black_square_button: :black_square_button:\nBinding Everything Together...\n========================")}, 30 * 1000);
  setTimeout(() => {m.edit("**Update In Progress**\n========================\n:white_check_mark: :white_check_mark: :white_check_mark: :white_check_mark: :white_check_mark: :white_check_mark: :white_check_mark: :black_square_button:\nPublishing Build To Heroku...\n========================")}, 36 * 1000);
  setTimeout(() => {m.edit("**Update In Progress**\n========================\n:white_check_mark: :white_check_mark: :white_check_mark: :white_check_mark: :white_check_mark: :white_check_mark: :white_check_mark: :white_check_mark:\nFinalizing Update...\n========================")}, 40 * 1000);

  setTimeout(() => {m.edit("**Update Finished**\n=+=+=+=+=+=+=+=+=+\nU-PvP Discord Admin\nBot Version: v572\nDiscord JS Version: v11.5.1\n=+=+=+=+=+=+=+=+=+")}, 45 * 1000);
  });
} else {
    //if not right roles does nothing
  }
}
module.exports.config = {
  name: "update",
  aliases: ["extractmodules"],
  usage: "u.update",
  description: "UPDATE MODULES AND COMMANDS",
  //noalias: "No Aliases",
  accessableby: "Noone"

}
