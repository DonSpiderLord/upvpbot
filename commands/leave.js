const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      const kickee = message.author;
      const member = message.guild.member(kickee);

      kickee.send(`Hello, You Just Left ${message.guild.name}. We Are Sad To See You Go. If You Want To Rejoin Later Use The Link discord.gg/8hCeYgc\n==========This Is Automated Message, Don't respond to it. Bye :wave:`).then(() => member.kick({reason: 'Person left the server with u.leave',}));
      message.delete();
}

module.exports.config = {
  name: "leave",
  aliases: ["exit"],
  usage: "u.leave",
  description: "Leave the server.",
  //noalias: "No Aliases",
  accessableby: "Owner"
}
