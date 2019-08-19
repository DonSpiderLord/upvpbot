const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const prefix = botconfig.prefix;
const badwords = require("./badwords.json");
var profanities = badwords.profanities;

const bot = new Discord.Client({disableEveryone: true});
bot.on("ready", async () =>{
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
  if (message.author.bot || message.channel.type === "dm") return;
  for (x = 0; x < profanities.length; x++) {
        if (message.content.includes(profanities[x])){
            await message.reply("Don't say that here! :angry:")     
          
            let ChatFilterEmbed = new Discord.RichEmbed()
            .setColor("#bf1711")
            .setTitle(`${message.author} Has Been Warned For Language!`);
      message.channel.send(ChatFilterEmbed);  
          message.delete();
            return;     
  }
}
  let args = message.content.slice(prefix.length).split(' ');
  let cmd = args.shift().toLowerCase();

let commandfile = bot.commands.get(cmd.slice(0)) || bot.commands.get(bot.aliases.get(cmd.slice(0)))
if (commandfile) commandfile.run(bot,message,args)

})

bot.login(process.env.BOT_TOKEN);
