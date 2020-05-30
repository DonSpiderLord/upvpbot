const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const prefix = botconfig.prefix;
const antispam = require("./anti_spam.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () =>{
  antispam(bot, {
        warnBuffer: 3, // Maximum ammount of messages allowed to send in the interval time before getting warned.
        maxBuffer: 5, // Maximum amount of messages allowed to send in the interval time before getting muted.
        interval: 5000, // Amount of time in ms users can send the maxim amount of messages(maxBuffer) before getting muted.
        warningMessage: "stop spamming! :oncoming_police_car:", // Inactive / Not Being Used.
        banMessage: "has been banned for spamming!", // Inactive / Not Being Used.
        maxDuplicatesWarning: 3,// Maximum amount of duplicate messages a user can send in a timespan before getting warned.
        maxDuplicatesBan: 5, // Maximum amount of duplicate messages a user can send in a timespan before getting muted.
        deleteMessagesAfterBanForPastDays: 7, // Inactive / Not Being Used
        exemptRoles: ["Owner", "Co-Owner", "Manager", "Build Manager", "Developer", "Admin","Mod+", "Mod", "Trial-Mod", "Helper", "Builder", "Trial Builder", "Staff"], // Name of roles (case sensitive) that are exempt from spam filter.
        exemptUsers: [] //Discord Users That Are Immune To Filter. Inactive / Not Being Used.
      });
  console.log(`${bot.user.username} is online!`);
})

const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands", (err, files) => {

  if(err) console.log(err)

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0) {
    return console.log("[LOGS] Couldn't Find Commands!");
  }

  jsfile.forEach((f, i) => {
    let pull = require(`./commands/${f}`);
    bot.commands.set(pull.config.name, pull);
    pull.config.aliases.forEach(alias => {
        bot.aliases.set(alias, pull.config.name)
    });
  });
});

bot.on("message", async message =>{
     let muterole = message.guild.roles.find(r => r.name === "Muted");
  
     //Start Of Word Filter Regex Rows.
     var re1 = /\bahole\b/igm.test(message.content);
     var re2 = /\banus\b/igm.test(message.content);
     var re3 = /\bass\b/igm.test(message.content);
     var re4 = /\bassface\b/igm.test(message.content);
     var re5 = /\basshole\b/igm.test(message.content);
     var re6 = /\basswipe\b/igm.test(message.content);
     var re7 = /\bbastard\b/igm.test(message.content);
     var re8 = /\bbitch\b/igm.test(message.content);
     var re9 = /\bbitches\b/igm.test(message.content);
     var re10 = /\bblowjob\b/igm.test(message.content);
     var re11 = /\bbutthole\b/igm.test(message.content);
     var re12 = /\bbuttwipe\b/igm.test(message.content);
     var re13 = /\bcock\b/igm.test(message.content);
     var re14 = /\bclit\b/igm.test(message.content);
     var re15 = /\bcockhead\b/igm.test(message.content);
     var re16 = /\bcock-sucker\b/igm.test(message.content);
     var re17 = /\bcocks\b/igm.test(message.content);
     var re18 = /\bcrap\b/igm.test(message.content);
     var re19 = /\bcum\b/igm.test(message.content);
     var re20 = /\bcunt\b/igm.test(message.content);
     var re21 = /\bcunts\b/igm.test(message.content);
     var re22 = /\bdick\b/igm.test(message.content);
     var re23 = /\bdicks\b/igm.test(message.content);
     var re24 = /\bdildo\b/igm.test(message.content);
     var re25 = /\bdildos\b/igm.test(message.content);
     var re26 = /\bfuck\b/igm.test(message.content);
     var re27 = /\bfucker\b/igm.test(message.content);
     var re28 = /\bfuckers\b/igm.test(message.content);
     var re29 = /\bfucking\b/igm.test(message.content);
     var re30 = /\bfaggot\b/igm.test(message.content);
     var re31 = /\bfags\b/igm.test(message.content);
     var re32 = /\bfaggots\b/igm.test(message.content);
     var re33 = /\bfag\b/igm.test(message.content);
     var re34 = /\bjizz\b/igm.test(message.content);
     var re35 = /\bjackoff\b/igm.test(message.content);
     var re36 = /\bjerk-off\b/igm.test(message.content);
     var re37 = /\blesbian\b/igm.test(message.content);
     var re38 = /\blipshit\b/igm.test(message.content);
     var re39 = /\bmasochist\b/igm.test(message.content);
     var re40 = /\bmasterbate\b/igm.test(message.content);
     var re41 = /\bmother-fucker\b/igm.test(message.content);
     var re42 = /\bmotherfucker\b/igm.test(message.content);
     var re43 = /\bmotherfuckers\b/igm.test(message.content);
     var re44 = /\bmother-fuckers\b/igm.test(message.content);
     var re45 = /\bnigger\b/igm.test(message.content);
     var re46 = /\bnigga\b/igm.test(message.content);
     var re47 = /\borgasm\b/igm.test(message.content);
     var re48 = /\bpenis\b/igm.test(message.content);
     var re49 = /\bpussy\b/igm.test(message.content);
     var re50 = /\brecktum\b/igm.test(message.content);
     var re51 = /\bsadist\b/igm.test(message.content);
     var re52 = /\bscank\b/igm.test(message.content);
     var re53 = /\bsex\b/igm.test(message.content);
     var re54 = /\bsexy\b/igm.test(message.content);
     var re55 = /\bshit\b/igm.test(message.content);
     var re56 = /\bshity\b/igm.test(message.content);
     var re57 = /\bslag\b/igm.test(message.content);
     var re58 = /\bslut\b/igm.test(message.content);
     var re59 = /\bvagina\b/igm.test(message.content);
     var re60 = /\bwhore\b/igm.test(message.content);
     var re61 = /\bxxx\b/igm.test(message.content);
     var re62 = /\bxrated\b/igm.test(message.content);
     var re63 = /\bboobs\b/igm.test(message.content);
     var re64 = /\bboob\b/igm.test(message.content);
     var re65 = /\bporn\b/igm.test(message.content);
     var re66 = /\btesticles\b/igm.test(message.content);
     var re67 = /\btwat\b/igm.test(message.content);
     var re68 = /\byed\b/igm.test(message.content);
     var re69 = /\bnazi\b/igm.test(message.content);
     var re70 = /\bnazis\b/igm.test(message.content);
     var re71 = /\bkkk\b/igm.test(message.content);
     var re72 = /\bshemale\b/igm.test(message.content);
     var re73 = /\bzabourah\b/igm.test(message.content);
     var re74 = /\bassfuck\b/igm.test(message.content);
    
     var dis5 = /\bdiscord\.gg\/[0-z][0-z][0-z][0-z][0-z]\b/igm.test(message.content);  //5 character invite link
     var dis6 = /\bdiscord\.gg\/[0-z][0-z][0-z][0-z][0-z][0-z]\b/igm.test(message.content);  //6 character invite link
     var dis7 = /\bdiscord\.gg\/[0-z][0-z][0-z][0-z][0-z][0-z][0-z]\b/igm.test(message.content);  //7 character invite link
     var dis16 = /\bdiscord\.gg\/[0-z][0-z][0-z][0-z][0-z][0-z][0-z][0-z][0-z][0-z][0-z][0-z][0-z][0-z][0-z][0-z]\b/igm.test(message.content);  //16 character invite link, outdated but possible.
     //End Of Word Filter Regex Rows.
  
      if (re1 == true || re2 == true || re3 == true || re4 == true ||re5 == true || re6 == true ||re7 == true || re8 == true ||re9 == true || re10 == true ||re11 == true || re12 == true ||re13 == true || re14 == true ||re15 == true || re16 == true ||re17 == true || re18 == true ||re19 == true || re20 == true ||re21 == true || re22 == true ||re23 == true || re24 == true ||re25 == true || re26 == true ||re27 == true || re28 == true ||re29 == true || re30 == true ||re31 == true || re32 == true || re33 == true || re34 == true ||re35 == true || re36 == true ||re37 == true || re38 == true ||re39 == true || re40 == true ||re41 == true || re42 == true ||re43 == true || re44 == true ||re45 == true || re46 == true ||re47 == true || re48 == true ||re49 == true || re50 == true ||re51 == true || re52 == true ||re53 == true || re54 == true ||re55 == true || re56 == true ||re57 == true || re58 == true ||re59 == true || re60 == true ||re61 == true || re62 == true || re63 == true || re64 == true ||re65 == true || re66 == true ||re67 == true || re68 == true ||re69 == true || re70 == true ||re71 == true || re72 == true ||re73 == true || re74 == true){

       if(!message.member.roles.some(r=>["Muted"].includes(r.name)) ) {
             message.member.addRole(muterole);
             message.channel.send(`${message.author.username} Has Been Muted For 3 Hours For Language. :mute:`);

             let ChatFilterModEmbed = new Discord.RichEmbed()
             .setColor("#2450b5")
             .setAuthor("U-PvP Network Modlogs")
             .addField("Moderation:", "Mute", true)
             .addField("Muted Person:", message.author.username, true)
             .setThumbnail(bot.user.displayAvatarURL)
             .addField("Reason:", "Language", true)
             .addField("Moderator:", bot.user.username, true)
             .addField("Message Sent:", message.content)

             bot.guilds.get('569546798725726236').channels.get('591314683286257674').send({embed: ChatFilterModEmbed});
          } else {
             console.log(`Tried muting a user ${message.author.username}, but user is already muted!`);
          }
          setTimeout(() => {
             if(message.member.roles.some(r=>["Muted"].includes(r.name)) ) {
                message.member.removeRole(muterole);
                message.channel.send(`${message.author.username} Has Been Unmuted. :sound:`);
             } else {
                console.log(`Tried Unmuting a user ${message.author.username}, but user was already unmuted!`);
             }}, 3 * 3600000);
     }
    if (dis5 == true || dis6 == true || dis7 == true || dis16 == true){
         if(message.member.roles.some(r=>["Peasant", "PvP God", "YouTuber"].includes(r.name)) ) {     
              message.delete();
              message.channel.send("Hey! Invite Links Are Not Allowed!");

              let InviteModEmbed = new Discord.RichEmbed()
              .setColor("#ffbb00")
              .setAuthor("U-PvP Network Modlogs")
              .addField("Moderation:", "Warn", true)
              .addField("Warned Person:", message.author.username, true)
              .setThumbnail(bot.user.displayAvatarURL)
              .addField("Reason:", "Posted an invite", true)
              .addField("Moderator:", bot.user.username, true)
              .addField("Message:", message.content)
              bot.guilds.get('569546798725726236').channels.get('591314683286257674').send({embed: InviteModEmbed});
        }
      }  
  
  bot.emit('checkMessage', message);
  if (message.author.bot || message.channel.type === "dm") return;
  if (!message.content.startsWith(prefix)) return;

  let args = message.content.slice(prefix.length).split(' ');
  let cmd = args.shift().toLowerCase();

let commandfile = bot.commands.get(cmd.slice(0)) || bot.commands.get(bot.aliases.get(cmd.slice(0)))
if (commandfile) commandfile.run(bot,message,args)

})

bot.login(process.env.BOT_TOKEN);
