const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.member.roles.some(r=>["Owner"].includes(r.name)) ) {

    let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!mutee) return message.channel.send("Please supply a user to mute!");

    let muterole = message.guild.roles.find(r => r.name === "Muted")
    if(!muterole) {
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#514f48"
          //permissions: []
        })
        message.guild.channels.forEach(async (channel, id) =>{
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
            SEND_TTS_MESSAGES: false,
            ATTACH_FILES: false,
            SPEAK: false
          })
        })
      } catch(e){
        console.log(e.stack);
      }
    }
    mutee.addRole(muterole.id).then(() => {
      message.delete()
      mutee.send(`Hello, you have been muted in ${message.guild.name}.\nThis is automated message. Don't respond to it.\nHave A Nice Day :wave:`)
      message.channel.send(`${mutee.user.username} was successfully muted.`)
    })

    let Membed = new Discord.RichEmbed()
    .setColor("#bf1711")
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("Moderation:", "Mute")
    .addField("Muted Person:", mutee.user.username)
    .addField("Moderator:", message.author.username)
    .addField("Date:", message.createdAt.toLocaleString())

    bot.guilds.get('607885235719372801').channels.get('608577419527454730').send({embed: Membed});

} else {

    return message.channel.send("You don't have permission to use this command!");

  }
}


module.exports.config = {
  name: "mute",
  aliases: ["nospeak"],
  usage: "u.mute <@user>",
  description: "Mutes Specified User.",
  //noalias: "No Aliases",
  accessableby: "Owner"

}
