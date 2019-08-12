const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.member.roles.some(r=>["Owner"].includes(r.name)) ) {
      message.guild.fetchBans().then(bans => {
            bans.forEach(user => {
                console.log(user.username + '#' + user.tag);
                user.send('MESSAGE / INVITE LINK');
                message.guild.unban(user);
            });
        });
      let Membed = new Discord.RichEmbed()
      .setColor("#0890d4")
      .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
      .setThumbnail(bot.user.displayAvatarURL)
      .addField("Moderation:", "Unban")
      .addField("Unbanned Person:", `${user.username} (${user.id})`)
      .addField("Moderator:", message.author.username)
      .addField("Date:", message.createdAt.toLocaleString())

      bot.guilds.get('607885235719372801').channels.get('608577419527454730').send({embed: Membed});

  } else {

        return message.channel.send("You don't have permission to use this command!");

    }
}

module.exports.config = {
  name: "unban",
  aliases: ["forgive"],
  usage: "u.unban <@user>",
  description: "Unbans Specified User.",
  //noalias: "No Aliases",
  accessableby: "Owner"
}
