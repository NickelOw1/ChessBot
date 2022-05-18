const { SlashCommandBuilder } = require('@discordjs/builders');
const db = require('../db.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('giveup')
		.setDescription('So you have chosen death'),
		
	async execute(interaction) {

        const selectedGame = await db.query(`SELECT id, whiteId, blackId 
        FROM games WHERE channelId = $1 AND victory = $2 AND (whiteId = $3 OR blackId = $3)`, 
        [interaction.channelId, "none", interaction.member.user.id ])
        let winner = ""
        if (!selectedGame.rows[0]) {
			interaction.reply("There is no such game")
			return
		}
        await interaction.reply('gave up');
        if (selectedGame.rows[0].whiteid == interaction.member.user.id) {
            winner = "black"
        }
        if (selectedGame.rows[0].blackid == interaction.member.user.id) {
            winner = "white"
        }
        await db.query(`UPDATE games SET victory = $1 
        WHERE id = $2`, 
        [winner, selectedGame.rows[0].id])
	},
};