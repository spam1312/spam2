﻿const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("618428926108368900")
setInterval(function() {
channel.send(`EffectSide Best`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
client.login(process.env.BOT_TOKEN2);