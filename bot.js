const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);
 

client.on('ready', () => {

    console.log('Ready for work!');

});

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) { // Prevents bot from responding to its own messages
        return
    }
    
    if (receivedMessage.content.startsWith("u.")) {
        processCommand(receivedMessage)
    }
})

function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(2) // Remove the leading letter "u" and dot "."
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space symbol
    let primaryCommand = splitCommand[0] // The first word directly after the "u." is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    console.log("Command received: " + primaryCommand)//Prints to log that command has been used
    console.log("Arguments: " + arguments)

//=======================================Changes are done under this line=======================================
if (primaryCommand == 'ping'){
  message.channel.send("Ping, Ping, Pong!");
}
