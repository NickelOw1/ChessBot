const { Client, Intents, MessageAttachment } = require('discord.js');
require('dotenv').config()
const axios = require('axios')
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const Canvas = require('canvas');
const {Chess} = require("fix-esm").require("chess.js");

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'daily') {
		const axiosResponse = await axios.get('https://lichess.org/api/puzzle/daily')
		const chess = Chess()
		movesArray = axiosResponse.data.game.pgn.split(" ");
		movesArray.forEach((item) => {
			chess.move(item)
		})
		interaction.reply("```"+chess.ascii()+"```")
	} else if (commandName === 'play') {
		const chess = Chess()
		console.log(chess.pgn())
		while (!chess.game_over()) {
			const moves = chess.moves()
			const move = moves[Math.floor(Math.random() * moves.length)]
			chess.move(move)
		}
		console.log(chess.pgn())
		return
		const canvas = Canvas.createCanvas(700, 700);
		const context = canvas.getContext('2d');
		const background = await Canvas.loadImage('./board.jpeg');

		context.drawImage(background, 0, 0, canvas.width, canvas.height);
	
		const attachment = new MessageAttachment(canvas.toBuffer(), 'profile-image.png');
	
		interaction.reply({ files: [attachment] });
	} else if (commandName === 'move') {
		const playerMove = interaction.options.getString('move');
		interaction.reply(playerMove)
	} else if (commandName === 'say') {
		const sayMessage = interaction.options.getString('input');
		interaction.reply(sayMessage)
	}
});

client.login(process.env.TOKEN);
