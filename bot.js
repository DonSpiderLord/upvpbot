const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready for work!');

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

if (message.content.startsWith("$kick")) {

if (!message.member.roles.find("Owner", "Co-Owner", "Manager", "Admin", "Developer", "Moderator", "Build Manager"))
    return;
// Easy way to get member object though mentions.
var member = message.mentions.members.first();
// Kick
member.kick().then((member) => {
    // Successmessage
    message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
}).catch(() => {
    // Failmessage
    message.channel.send("Access Denied");
});
}
};
client.on("message", (message) => {
if (message.content.startsWith("$ban")) {

    if (!message.member.roles.find("Owner", "Co-Owner", "Manager", "Admin", "Developer", "Moderator", "Build Manager"))
        return;

    // Easy way to get member object though mentions.
    var member = message.mentions.members.first();
    // ban
    member.ban().then((member) => {
        // Successmessage
        message.channel.send(":wave: " + member.displayName + " has been successfully banned https://gfycat.com/playfulfittingcaribou :point_right: ");
    }).catch(() => {
        // Failmessage
        message.channel.send("Access Denied");
    });
}
});

// THIS  MUST  BE  THIS  WAY, THIS IS FOR AUTHENTICATION!
client.login(process.env.BOT_TOKEN);
