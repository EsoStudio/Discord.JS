const Discord = require('discord.js');
const { Intents } = Discord;
const client = new Discord.Client({
    intents:
    [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_INVITES
    ]
});
const { token } = require('./config.json')

client.once("ready", () => {
    console.log(`🚀 ${client.user.tag} je ONLINE!`);
    client.user.setActivity("som online!", { type: 'LISTENING'});
})

client.login(token)
