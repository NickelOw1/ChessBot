const { SlashCommandBuilder } = require('@discordjs/builders');
const db = require('../db.js')
const { Chess } = require("fix-esm").require("chess.js");
const convertFenToCanvas = require('../convertFenToCanvas')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('move')
		.setDescription('Receives your move')
        .addStringOption(option => option.setName('move').setDescription('your move').setRequired(true)),

	async execute(interaction) {
		const playerMove = interaction.options.getString('move');
		const selectedGame = await db.query(`SELECT id, fen, messageId, blackId, whiteId, nextmove 
		FROM games WHERE channelId = $1 AND victory = $2 AND (whiteId = $3 OR blackId = $4)`, 
		[interaction.channelId, "none", interaction.member.user.id, interaction.member.user.id ])
		if (!selectedGame.rows[0]) {
			interaction.reply("There is no such game")
			return
		}
		if ((interaction.member.user.id != selectedGame.rows[0].whiteid && selectedGame.rows[0].nextmove == 1) || (interaction.member.user.id != selectedGame.rows[0].blackid && selectedGame.rows[0].nextmove == -1)) {
			interaction.reply("Thats not your turn")
			return
		}
		chess = Chess(selectedGame.rows[0].fen)
		chess.move(playerMove, {sloppy: true})
		if (chess.fen()==selectedGame.rows[0].fen) {
			interaction.reply("Wrong notation")
			return
		}
		const nextMove = selectedGame.rows[0].nextmove * (-1)
		await db.query(`UPDATE games set fen = $1, nextmove = $2
		 where id=$3`, 
		  [chess.fen(), nextMove, selectedGame.rows[0].id])
		const attachment = await convertFenToCanvas(chess.fen())
		const channel = interaction.channel
		interaction.reply(playerMove)
		setTimeout(() => {
			interaction.deleteReply()
		}, 1500);

		await (await channel.messages.fetch(selectedGame.rows[0].messageid)).edit({files: [attachment]})
	},
};

