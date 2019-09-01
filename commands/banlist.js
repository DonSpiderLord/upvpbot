let Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.member.roles.some(r=>["Owner", "Co-Owner", "Manager", "Admin"].includes(r.name)) ) {
    message.channel.send("Banned Users List\n===============");
    message.guild.fetchBans().then(bans => {
          bans.forEach(user => {
            message.channel.send(user.tag);
          })
      })
  } else {
  message.channel.send("You don't have permission to use this command!");
  }
}

module.exports.config = {
  name: "banlist",
  aliases: ["showbans"],
  usage: "u.banlist",
  description: "Shows All Of The Banned Users.",
  //noalias: "No Aliases",
  accessableby: "Owner"

}
