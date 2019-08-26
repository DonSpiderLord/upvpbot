//This script is made by Michael J. Scofield, thank you!
const Discord = require("discord.js");

var authors = [];
var warned = [];
var banned = [];
var messageLog = [];

module.exports = async (client, options) => {
  /* Option Definitions */
  
  const warnBuffer = (options && options.warnBuffer) || 3; // Default Value: 3
  const maxBuffer = (options && options.maxBuffer) || 5; // Default Value: 5
  const interval = (options && options.interval) || 1000; //Default Time: 2000MS (2 Seconds in Miliseconds)
  const warningMessage = (options && options.warningMessage) || "please stop spamming!"; // Default Message: "please stop spamming!" (@User please stop spamming!)
  const banMessage = (options && options.banMessage) || "has been hit by ban hammer for spamming!"; // Default Message: "has been hit by ban hammer for spamming!" (@User has been hit by ban hammer for spamming!)
  const maxDuplicatesWarning = (options && options.maxDuplicatesWarning || 7); // Default Value: 7
  const maxDuplicatesBan = (options && options. maxDuplicatesBan || 10); // Deafult Value: 7
  const deleteMessagesAfterBanForPastDays = (options && options.deleteMessagesAfterBanForPastDays || 7); // Default Value: 10
  const exemptRoles = (options && options.exemptRoles) || []; // Default Value: Nothingness (None)
  const exemptUsers = (options && options.exemptUsers) || []; // Default Value: Nothingness (None)
  
  /* Make sure all variables have correct types */
  // TO DO: Terminate process when one of these errors is runned.

  if(isNaN(warnBuffer)) throw new Error("warnBuffer must be a number.");
  if(isNaN(maxBuffer)) throw new Error("maxBuffer must be a number.");
  if(isNaN(interval)) throw new Error("interval must be a number.");
  if(!isNaN(banMessage) || banMessage.length < 5) throw new Error("banMessage must be a string and have at least 5 charcters length.");
  if(!isNaN(warningMessage) || warningMessage.length < 5) throw new Error("warningMessage must be a string and have at least 5 characters.");
  if(isNaN(maxDuplicatesWarning)) throw new Error("maxDuplicatesWarning must be a number.")
  if(isNaN(maxDuplicatesBan)) throw new Error("maxDuplicatesBan must be a number.");
  if(isNaN(deleteMessagesAfterBanForPastDays)) throw new Error("deleteMessagesAfterBanForPastDays must be a number.");
  if(exemptRoles.constructor !== Array) throw new Error("extemptRoles must be an array.");
  if(exemptUsers.constructor !== Array) throw new Error("exemptUsers must be an array.");
  
  // Custom 'checkMessage' event that handles messages
 client.on("checkMessage", async (message) => {
 
  // Ban the User
  const banUser = async (m, banMsg) => {
    for (var i = 0; i < messageLog.length; i++) {
        if (messageLog[i].author == m.author.id) {
          messageLog.splice(i);
        }
      }
  
      banned.push(m.author.id);
  
      let user = m.guild.members.get(m.author.id);
      try {
        if (user) {
        user.ban(deleteMessagesAfterBanForPastDays)
          
          let BanEmbed = new Discord.RichEmbed()
          .setColor("#0890d4")
          .setAuthor(`${m.guild.name} Modlogs`, m.guild.iconURL)
          .setThumbnail(bot.user.displayAvatarURL)
          .addField("Moderation:", "Ban")
          .addField("Banned Person:", m.author.username)
          .addField("Reason:", "Autoban For Spam")
          .addField("Moderator:", m.author.username)
          .addField("Date:", m.createdAt.toLocaleString())

          bot.guilds.get('607885235719372801').channels.get('608577419527454730').send({embed: BanEmbed});      
      }
    } catch(e){
      console.log(e.stack);
      m.channel.send("Something went wrong... Bot author! Check the console!");
    }
  };
})
  
    
   // Warn the User
   const warnUser = async (m, reply) => {
    warned.push(m.author.id);
     
    let SpamFilterWarn = new Discord.RichEmbed()
    .setColor("#bf1711")
    .setTitle(`${m.author.username} Has Been Warned For Spam!`);
    m.channel.send({embed: SpamFilterWarn});
   }

    if (m.author.bot) return;
    if (m.channel.type !== "text" || !m.member || !m.guild || !m.channel.guild) return;
   
    if (m.member.roles.some(r => exemptRoles.includes(r.name)) || exemptUsers.includes(m.author.tag)) return;

    if (m.author.id !== client.user.id) {
      let currentTime = Math.floor(Date.now());
      authors.push({
        "time": currentTime,
        "author": m.author.id
      });
      
      messageLog.push({
        "message": m.content,
        "author": m.author.id
      });
      
      let msgMatch = 0;
      for (var i = 0; i < messageLog.length; i++) {
        if (messageLog[i].message == m.content && (messageLog[i].author == m.author.id) && (m.author.id !== client.user.id)) {
          msgMatch++;
        }
      }
      
      if (msgMatch == maxDuplicatesWarning && !warned.includes(m.author.id)) {
        warnUser(m, warningMessage);
      }

      if (msgMatch == maxDuplicatesBan && !banned.includes(m.author.id)) {
        banUser(m, banMessage);
      }

      var matched = 0;

      for (var i = 0; i < authors.length; i++) {
        if (authors[i].time > currentTime - interval) {
          matched++;
          if (matched == warnBuffer && !warned.includes(m.author.id)) {
            warnUser(m, warningMessage);
          } else if (matched == maxBuffer) {
            if (!banned.includes(m.author.id)) {
              banUser(m, banMessage);
            }
          }
        } else if (authors[i].time < currentTime - interval) {
          authors.splice(i);
          warned.splice(warned.indexOf(authors[i]));
          banned.splice(warned.indexOf(authors[i]));
        }

        if (messageLog.length >= 200) {
          messageLog.shift();
        }
      }
    }
  };
