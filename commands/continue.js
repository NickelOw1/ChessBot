const { SlashCommandBuilder } = require('@discordjs/builders');
const db = require('../db.js')
const convertFenToCanvas = require('../convertFenToCanvas')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('continue')
		.setDescription('Resends message with your last game'),
		
	async execute(interaction) {

        const selectedGame = await db.query(`SELECT fen, id 
        FROM games WHERE channelId = $1 AND victory = $2 AND (whiteId = $3 OR blackId = $3)`, 
		[ interaction.channelId, "none", interaction.member.user.id ])

        const attachment = await convertFenToCanvas(selectedGame.rows[0].fen)
        
        const interactionMessage = await interaction.reply({files: [attachment], fetchReply: true})
        await db.query(`UPDATE games set messageId = $1
        where id=$2`, 

        [interactionMessage.id, selectedGame.rows[0].id])

        
	},
};