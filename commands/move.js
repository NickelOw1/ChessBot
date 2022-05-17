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
		//const newTest = await db.query(`INSERT INTO testtable (pname, surname) values ($1, $2)`, ["n4", "su4"])
		//const selectedTest = await db.query(`SELECT * from testtable WHERE pname = $1`, ["n4"])
		const selectedGame = await db.query(`SELECT fen from games WHERE channelId = $1 AND (whiteId = $2 OR blackId = $3)`, [interaction.channelId, interaction.member.user.id, interaction.member.user.id ])
		console.log(selectedGame.rows)
		chess = Chess(selectedGame.rows[0].fen)
		chess.move(playerMove, {sloppy: true})
		console.log(chess.fen())
		console.log(interaction.member.user.id)
		await db.query(`UPDATE games set fen = $1 where (whiteId = $2 OR blackId = $3) AND channelId = $4`, [chess.fen(), interaction.member.user.id, interaction.member.user.id , interaction.channelId])
		const attachment = await convertFenToCanvas(chess.fen())
		interaction.reply(playerMove)
		setTimeout(() => {
			interaction.deleteReply()
		}, 3000);
		const channel = interaction.channel
		await (await channel.messages.fetch('976177789302620201')).edit({files: [attachment]})
	},
};

