// Require the necessary discord.js classes
const { Client, Intents, MessageAttachment } = require('discord.js');
require('dotenv').config()
const axios = require('axios')
// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const Canvas = require('canvas');
// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply('Server info.');
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	} else if (commandName === 'daily') {
		const axiosResponse = await axios.get('https://lichess.org/api/puzzle/daily')
		interaction.reply(axiosResponse.data.game.pgn)
	} else if (commandName === 'play') {
		const canvas = Canvas.createCanvas(700, 700);
		const context = canvas.getContext('2d');
		const background = await Canvas.loadImage('./board.jpeg');

		// This uses the canvas dimensions to stretch the image onto the entire canvas
		context.drawImage(background, 0, 0, canvas.width, canvas.height);
	
		// Use the helpful Attachment class structure to process the file for you
		const attachment = new MessageAttachment(canvas.toBuffer(), 'profile-image.png');
	
		interaction.reply({ files: [attachment] });
	}
});

client.login(process.env.TOKEN);
