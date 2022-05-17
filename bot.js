const { Client, Intents} = require('discord.js');
require('dotenv').config()
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const commandsHandler = require('./commandsHandler.js')

commandsHandler.execute(client)

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;
	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.login(process.env.TOKEN);
