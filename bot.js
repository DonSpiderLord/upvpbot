const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NjA3ODgxMzQ1OTk3MjA5NjAw.XU1NJQ.fLRXXLB_Jbbf8u0I9584A1ECm0w);
