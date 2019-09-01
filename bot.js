const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const prefix = botconfig.prefix;
const antispam = require("./anti_spam.js");
const xp = require("./xp.json");

const bot = new Discord.Client({disableEveryone: true});
bot.on("ready", async () =>{
  antispam(bot, {
        warnBuffer: 3, // Maximum ammount of messages allowed to send in the interval time before getting warned.
        maxBuffer: 5, // Maximum amount of messages allowed to send in the interval time before getting banned.
        interval: 3000, // Amount of time in ms users can send the maxim amount of messages(maxBuffer) before getting banned.
        warningMessage: "stop spamming! :oncoming_police_car:", // Message users receive when warned. (message starts with '@User, ' so you only need to input continue of it.)
        banMessage: "has been banned for spamming!", // Message sent in chat when user is banned. (message starts with '@User, ' so you only need to input continue of it.)
        maxDuplicatesWarning: 3,// Maximum amount of duplicate messages a user can send in a timespan before getting warned.
        maxDuplicatesBan: 5, // Maximum amount of duplicate messages a user can send in a timespan before getting banned.
        deleteMessagesAfterBanForPastDays: 7, // Deletes the message history of the banned user in x days.
        exemptRoles: ["Owner", "Co-Owner", "Manager", "Build Manager", "Developer", "Admin", "Moderator", "Trial-Mod", "Helper", "Builder", "Trial Builder", "Staff"], // Name of roles (case sensitive) that are exempt from spam filter.
        exemptUsers: [] // The Discord tags of the users (e.g: MrAugu#9016) (case sensitive) that are exempt from spam filter.
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
  bot.emit('checkMessage', message);
  if (message.author.bot || message.channel.type === "dm") return;

  let xpAdd = Math.floor(Math.random() * 7) + 8;

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtlvl = xp[message.author.id].level * 500;
  xp[message.author.id].xp = curxp + xpAdd;

  if(nxtlvl <= curxp){
      xp[message.author.id].level = curlvl + 1;
      let lvlup = new Discord.RichEmbed()
      .setTitle(`:tada: Congrats ${message.author.username}! :tada:`)
      .setColor("#ffffff")
      .addField(`You Just Leveled Up To Level ${curlvl + 1}`)

      message.channel.send({embed: lvlup});

  }

  fs.writeFile("https://jsonblob.com/0e790435-cca6-11e9-af14-af9c4fc46438", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });

  let args = message.content.slice(prefix.length).split(' ');
  let cmd = args.shift().toLowerCase();

let commandfile = bot.commands.get(cmd.slice(0)) || bot.commands.get(bot.aliases.get(cmd.slice(0)))
if (commandfile) commandfile.run(bot,message,args)

})

bot.login(process.env.BOT_TOKEN);
