const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.member.roles.some(r=>["Owner"].includes(r.name)) ) {

    let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!mutee) return message.channel.send("Please supply a user to mute!");

    let reason = args.slice(1).join(" ");
    if(!reason) reason = "Please supply a reason to mute!"

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
      mutee.send(`Hello, you have been muted in ${message.guild.name} for: ${reason}`)
      message.channel.send(`${mutee.user.username} was successfully muted.`)
    })

    let embed = new Discord.RichEmbed()
    .setColor("")
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Moderation:", "Mute")
    .addField("Muted Person:", mutee.user.username)
    .addField("Moderator:", message.author.username)
    .addField("Reason:", reason)
    .addField("Date:", message.createdAt.toLocaleString())

    let sChannel = message.guild.channels.find(c => c.name === "mod-logs")
    sChannel.send(embed)

} else {

    return message.channel.send("You don't have permission to use this command!");

  }
}


module.exports.config = {
  name: "mute",
  aliases: ["nospeak"],
  usage: "u.mute <@user> <reason>",
  description: "Mutes Specified User.",
  //noalias: "No Aliases",
  accessableby: "Owner"

}
