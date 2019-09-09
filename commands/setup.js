//this isn't actual setup lol. just to make people think it's advanced bot. If you are player who found this then congrats you found an easter egg. ^o^
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(message.member.roles.some(r=>["Owner", "Co-Owner", "Manager"].includes(r.name)) ) {
  message.delete();
  message.channel.send("**Setup In Progress**\n========================\n:black_square_button: :black_square_button: :black_square_button: :black_square_button: :black_square_button: :black_square_button: :black_square_button: :black_square_button:\nInitializing Setup...\n========================").then(m => {
  setTimeout(() => {m.edit("**Setup In Progress**\n========================\n:white_check_mark: :black_square_button: :black_square_button: :black_square_button: :black_square_button: :black_square_button: :black_square_button: :black_square_button:\nExtracting Modules...\n========================")}, 5 * 1000);
  setTimeout(() => {m.edit("**Setup In Progress**\n========================\n:white_check_mark: :white_check_mark: :black_square_button: :black_square_button: :black_square_button: :black_square_button: :black_square_button: :black_square_button:\nExtracting Commands...\n========================")}, 8 * 1000);
  setTimeout(() => {m.edit("**Setup In Progress**\n========================\n:white_check_mark: :white_check_mark: :white_check_mark: :black_square_button: :black_square_button: :black_square_button: :black_square_button: :black_square_button:\nEnabling Spam & Language Filters...\n========================")}, 14 * 1000);
  setTimeout(() => {m.edit("**Setup In Progress**\n========================\n:white_check_mark: :white_check_mark: :white_check_mark: :white_check_mark: :black_square_button: :black_square_button: :black_square_button: :black_square_button:\nGetting Channel ID's...\n========================")}, 17 * 1000);
  setTimeout(() => {m.edit("**Setup In Progress**\n========================\n:white_check_mark: :white_check_mark: :white_check_mark: :white_check_mark: :white_check_mark: :black_square_button: :black_square_button: :black_square_button:\nSetting Permissions...\n========================")}, 19 * 1000);
  setTimeout(() => {m.edit("**Setup In Progress**\n========================\n:white_check_mark: :white_check_mark: :white_check_mark: :white_check_mark: :white_check_mark: :white_check_mark: :black_square_button: :black_square_button:\nGetting Additional Binaries...\n========================")}, 30 * 1000);
  setTimeout(() => {m.edit("**Setup In Progress**\n========================\n:white_check_mark: :white_check_mark: :white_check_mark: :white_check_mark: :white_check_mark: :white_check_mark: :white_check_mark: :black_square_button:\nBinding Everything Together...\n========================")}, 36 * 1000);
  setTimeout(() => {m.edit("**Setup In Progress**\n========================\n:white_check_mark: :white_check_mark: :white_check_mark: :white_check_mark: :white_check_mark: :white_check_mark: :white_check_mark: :white_check_mark:\nFinalizing Setup...\n========================")}, 40 * 1000);

  setTimeout(() => {m.edit("**Setup Is Finished**\n=+=+=+=+=+=+=+=+=+\nU-PvP Discord Admin\nBot Version: v554\nDiscord JS Version: v11.5\n=+=+=+=+=+=+=+=+=+")}, 45 * 1000);

  setTimeout(() => {
    let sEmbed = new Discord.RichEmbed()
    .setColor("#ffffff")
    .setTitle("Help Menu")
    .setThumbnail(bot.user.displayAvatarURL)
    //.setAuthor(bot.user.username)
    .setDescription("The bot prefix is: u.\n\n**:thinking: Basic Commands: :thinking:**\n_u.help_ - This menu!\n_u.ip_ - Shows IP's Adresses & Ports For All U-PvP Network Servers!\n_u.ping_ - Get Ping!.\n_u.uptime_ - Gets Time That The Bot Is Online.\n_u.report_ - Report someone who is breaking rules on server.\n_u.suggest_ - Make a suggestion. Not all suggestions may be realized.\n===================\n**:100: Fun & Random Commands :100:**\n_u.quote_ - Random Quote Or Joke\n_u.8ball_ - Ask A Question And Get Answer From 8 Ball Of Truth.\n_u.emoji_ - Get Random ASCII Emoji\n_u.bigtext_ - Make Text Big\n_u.invite_ - Get Invite Link To This Server\n_u.github_ - Get Github Repository Links For This Bot\n_u.leave_ - Leave This Server\n_u.hello_ - Says Hello To You In Random Language\n\n_**This Bot Is Still Under Development - Send Bugs And Suggestions To @DonSpiderLord#2408**_");
    message.channel.send({embed: sEmbed})}, 50 * 1000);
  });
  } else {
    //if not right roles does nothing
  }
}
module.exports.config = {
  name: "setup",
  aliases: ["extractmodules"],
  usage: "u.setup",
  description: "SETUP MODULES AND COMMANDS",
  //noalias: "No Aliases",
  accessableby: "Peasant"

}
