const {Chess} = require("fix-esm").require("chess.js");
const { createCanvas, Image } = require('@napi-rs/canvas')
const { readFile } = require('fs/promises');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const convertFenToCanvas = require('../convertFenToCanvas')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('Starts the game'),
	async execute(interaction) {
		const chess = Chess()
		const attachment = await convertFenToCanvas(chess.fen())
		await interaction.reply({ files: [attachment] });
	},
};