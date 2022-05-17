const { SlashCommandBuilder } = require('@discordjs/builders');
const db = require('../db.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('giveup')
		.setDescription('So you have chosen death'),
		
	async execute(interaction) {
		await interaction.reply('gave up');

        const selectedGame = await db.query(`SELECT whiteId, blackId from games WHERE channelId = $1 AND (whiteId = $2 OR blackId = $2)`, [interaction.channelId, interaction.member.user.id ])
        console.log(selectedGame)
        let winner = ""
        if (selectedGame.rows[0].whiteid == interaction.member.user.id) {
            winner = "black"
        }
        if (selectedGame.rows[0].blackid == interaction.member.user.id) {
            winner = "white"
        }
        await db.query(`UPDATE games set victory = $1 where (whiteId = $2 OR blackId = $2) AND channelId = $3`, [winner, interaction.member.user.id, interaction.channelId])
	},
};