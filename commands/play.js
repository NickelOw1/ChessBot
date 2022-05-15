const {Chess} = require("fix-esm").require("chess.js");
const axios = require('axios')
const { createCanvas, Image } = require('@napi-rs/canvas')
const { readFile } = require('fs/promises');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Intents, Collection, MessageAttachment } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('Starts the game'),
	async execute(interaction) {

		const canvas = createCanvas(640, 640);
		const context = canvas.getContext('2d');

		const background = await readFile('./board.jpeg');
		const backgroundImage = new Image();
		backgroundImage.src = background;
		context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

		context.font = '80px sans-serif';
		context.fillStyle = '#ffffff';
		context.fillText(`♚`, 330, 620);
		const attachment = new MessageAttachment(canvas.toBuffer('image/jpeg'), 'board.png');

		await interaction.reply({ files: [attachment] });
	},
};