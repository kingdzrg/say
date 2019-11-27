const Discord = require('discord.js');
const client = new Discord.Client();
var prefix ="1"

client.on('message', message => {
if (message.content.startsWith(prefix + "say")) {
var args = message.content.split(" ")
args = args.join(" ").slice(args[0].length);

if (!args) return;

message.channel.send(args);
};
})

client.login(process.env.TOKEN);
