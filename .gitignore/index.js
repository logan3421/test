const Discord = require('discord.js');
const bot = new Discord.Client();
bot.on("ready", function()  {
 bot.user.setGame("HELLO")
    console.log("LE");
});
bot.login("NTMwNDUzNzk2MTU3OTE1MTUx.Dw_0rg.Cmqc7cmaud-ZepLDgTAihxftyHA");
