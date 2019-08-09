const botconfig = require("./botconfig.json");
const colours = require("./colours.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});
bot.on("ready", async () =>{
  console.log(`${bot.user.username} is online!`);
})

bot.on("message", async message =>{
  if (message.author.bot || message.channel.type === "dm") return;

let prefix = botconfig.prefix;
let messageArray = message.content.split(" ")
let cmd = messageArray[0];
let args = messageArray.slice(2);

if (cmd === `${prefix}hello`){
  return message.channel.send("Hello!")
}

if (cmd === `${prefix}help`){
  let sEmbed = new Discord.RichEmbed()
  .setcolor(colours.cyan)
  .setTitle("Bot Help")
  .addField("This is just a test!!!", true)
  message.channel.send({embed: sEmbed});
}
})

bot.login(process.env.BOT_TOKEN);
