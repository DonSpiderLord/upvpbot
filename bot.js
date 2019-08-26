const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const prefix = botconfig.prefix;
const badwords = require("./badwords.json");
var profanities = badwords.profanities;
const antispam = require("./anti_spam.js");

const bot = new Discord.Client({disableEveryone: true});
bot.on("ready", async () =>{
  antispam(bot, {
        warnBuffer: 3, // Maximum ammount of messages allowed to send in the interval time before getting warned.
        maxBuffer: 5, // Maximum amount of messages allowed to send in the interval time before getting banned.
        interval: 2000, // Amount of time in ms users can send the maxim amount of messages(maxBuffer) before getting banned. 
        warningMessage: "please stop spamming!", // Message users receive when warned. (message starts with '@User, ' so you only need to input continue of it.) 
        banMessage: "has been hit by ban hammer for spamming!", // Message sent in chat when user is banned. (message starts with '@User, ' so you only need to input continue of it.) 
        maxDuplicatesWarning: 7,// Maximum amount of duplicate messages a user can send in a timespan before getting warned.
        maxDuplicatesBan: 10, // Maximum amount of duplicate messages a user can send in a timespan before getting banned.
        deleteMessagesAfterBanForPastDays: 7, // Deletes the message history of the banned user in x days.
        exemptRoles: ["Moderator"], // Name of roles (case sensitive) that are exempt from spam filter.
        exemptUsers: ["MrAugu#9016"] // The Discord tags of the users (e.g: MrAugu#9016) (case sensitive) that are exempt from spam filter.
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
  bot.emit('checkMessage', msg);
  if (message.author.bot || message.channel.type === "dm") return;
  for (x = 0; x < profanities.length; x++) {
        if (message.content.includes(profanities[x])){
            await message.reply("Don't say that here! :angry:")     
          
            let ChatFilterEmbed = new Discord.RichEmbed()
            .setColor("#bf1711")
            .setTitle(`${message.author.username} Has Been Warned For Language!`);
            message.channel.send({embed: ChatFilterEmbed});  
              //message.delete();
          
            let ChatFilterModEmbed = new Discord.RichEmbed()
            .setColor("#bf1711")
            .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
            .setThumbnail(bot.user.displayAvatarURL)
            .addField("Moderation:", "Warn")
            .addField("Warned Person:", message.author.username)
            .addField("Reason:", "Language")
            .addField("Moderator:", bot.user.username)
            .addField("Date:", message.createdAt.toLocaleString())

            bot.guilds.get('607885235719372801').channels.get('608577419527454730').send({embed: ChatFilterModEmbed});
            
            return;     
  }
}
  let args = message.content.slice(prefix.length).split(' ');
  let cmd = args.shift().toLowerCase();

let commandfile = bot.commands.get(cmd.slice(0)) || bot.commands.get(bot.aliases.get(cmd.slice(0)))
if (commandfile) commandfile.run(bot,message,args)

})

bot.login(process.env.BOT_TOKEN);
