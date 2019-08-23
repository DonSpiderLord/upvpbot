const Discord = require("discord.js");
const fs = require("fs");
const botconfig = require("./botconfig.json");
const prefix = botconfig.prefix;
const badwords = require("./badwords.json");
var profanities = badwords.profanities;
const client = new Discord.Client();
client.commands = new Discord.Collection();

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () =>{
  console.log(`${bot.user.username} is online!`);
})

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

bot.on("message", async message =>{
  if (message.author.bot || message.channel.type === "dm") return;
  if (!client.commands.has(command)) return;

  try {

  client.commands.get(command).execute(message, args);

  } catch (error) {
    
	console.error(error);
	message.reply('There was an error trying to execute that command!');

 }
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
}

bot.login(process.env.BOT_TOKEN);
