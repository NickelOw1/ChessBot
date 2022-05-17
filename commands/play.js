const { Chess } = require("fix-esm").require("chess.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const convertFenToCanvas = require('../convertFenToCanvas')
const db = require('../db.js')
module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('Starts the game')
		.addStringOption(option => option.setName('second_player').setDescription('player to play with').setRequired(true))
		.addStringOption(option => option.setName('fen').setDescription('fen string to build up non standart canvas')),


	async execute(interaction) {
	
		const fenOption = interaction.options.getString('fen');
		const secondPlayerOption = interaction.options.getString('second_player')
		secondPlayerId = secondPlayerOption.slice(3, -1)
		let chess = Chess()
		if (fenOption) {
			chess = Chess(fenOption)
		}
		await db.query(`INSERT INTO games (whiteId, blackId, fen, channelId, victory) values ($1, $2, $3, $4, $5)`, [interaction.member.user.id, secondPlayerId, chess.fen(), interaction.channelId, "none"])
		const attachment = await convertFenToCanvas(chess.fen())
		await interaction.reply({ files: [attachment] });
	},
};