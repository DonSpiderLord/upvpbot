const Discord = require("discord.js")

 module.exports.run = async (bot, message, args) => {

    const replies = [
      "Hello To You From Arabic Speaking Countries - مرحبا",
      "Hello To You From German Speaking Countries - Hallo",
      "Hello To You From Bengali Speaking Countries - নমস্কার",
      "Hello To You From Bulgarian Speaking Countries - Здравейте",
      "Hello To You From Catalan Speaking Countries - Hola",
      "Hello To You From Chinese(Mandarin) Speaking Countries - 你好",
      "Hello To You From Croatian Speaking Countries - Dobar dan",
      "Hello To You From Danish Speaking Countries - God dag",
      "Hello To You From Dutch Speaking Countries - Hallo",
      "Hello To You From Finnish Speaking Countries - hyvää päivää",
      "Hello To You From French Speaking Countries - Bonjour",
      "Hello To You From Irish(Gaeilge) Speaking Countries - Dia dhuit",
      "Hello To You From Greek Speaking Countries - Γειά σου",
      "Hello To You From Hebrew Speaking Countries - שלום",
      "Hello To You From Hindi Speaking Countries - नमस्ते",
      "Hello To You From Hungarian Speaking Countries - Jó napot",
      "Hello To You From Icelandic Speaking Countries - Góðan dag",
      "Hello To You From Indonesian Speaking Countries - Selamat siang",
      "Hello To You From Italian Speaking Countries - Salve",
      "Hello To You From Japanese Speaking Countries - こんにちは",
      "Hello To You From Korean Speaking Countries - 여보세요",
      "Hello To You From Lithuanian Speaking Countries - Sveiki",
      "Hello To You From Latvian Speaking Countries - Sveiki",
      "Hello To You From Luxembourgish Speaking Countries - Moïen",
      "Hello To You From Norwegian Speaking Countries - Hallo",
      "Hello To You From Polish Speaking Countries - Cześć",
      "Hello To You From Portuguese Speaking Countries - Olá",
      "Hello To You From Romanian Speaking Countries - Bună ziua",
      "Hello To You From Russian Speaking Countries - Привет",
      "Hello To You From Slovak Speaking Countries - Ahoj",
      "Hello To You From Spanish Speaking Countries - Hola",
      "Hello To You From Swedish Speaking Countries - Hallå",
      "Hello To You From Thai Speaking Countries - สวัสดี",
      "Hello To You From Turkish Speaking Countries - Merhaba",
      "Hello To You From Vietnamese Speaking Countries - ngày tốt",
      "Hello To You From Zulu Speaking Countries - Sawubona",
      "Hello To You From Estonian Speaking Countries - Tere",                                                                                                                             
    ]

    let index = Math.floor(Math.random() * (replies.length));
    return message.channel.send(replies[index]);
 }

    module.exports.config = {
        name: "hello",
        aliases: ["hi"],
        usage: "u.hello",
        description: "Returns random greeting",
        //noalias: "No Aliases",
        accessableby: "Anyone"
    }
