const { Chess } = require("fix-esm").require("chess.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
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