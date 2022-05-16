require('dotenv').config()

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const handlers = [
	'./handlers/commandsHandler.js',
	'./handlers/eventsHandler.js'
]

handlers.forEach(loadHandler)

function loadHandler(path) {
	return require(path).execute(client)
}

void client.login(process.env.TOKEN);
