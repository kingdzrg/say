const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
var prefix ="1"

client.on('message', message => {
if (message.content.startsWith(prefix + "say")) {
var args = message.content.split(" ")
args = args.join(" ").slice(args[0].length);

if (!args) return;

message.channel.send(args);
};
})

client2.on('message', message => {
if (message.content.startsWith(prefix + "say2")) {
var args = message.content.split(" ")
args = args.join(" ").slice(args[0].length);

if (!args) return;

message.channel.send(args);
};
})

client3.on('message', message => {
if (message.content.startsWith(prefix + "say3")) {
var args = message.content.split(" ")
args = args.join(" ").slice(args[0].length);

if (!args) return;

message.channel.send(args);
};
})

client4.on('message', message => {
if (message.content.startsWith(prefix + "say4")) {
var args = message.content.split(" ")
args = args.join(" ").slice(args[0].length);

if (!args) return;

message.channel.send(args);
};
})

client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
client3.login(process.env.TOKEN3);
client4.login(process.env.TOKEN4);
