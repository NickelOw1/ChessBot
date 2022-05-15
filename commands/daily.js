const {Chess} = require("fix-esm").require("chess.js");
const axios = require('axios')

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('daily')
		.setDescription('Gets the daily puzzle from lichess.org'),
	async execute(interaction) {
        const axiosResponse = await axios.get('https://lichess.org/api/puzzle/daily')
        const chess = Chess()
        movesArray = axiosResponse.data.game.pgn.split(" ");
        movesArray.forEach((item) => {
            chess.move(item)
        })
        interaction.reply("```"+chess.ascii()+"```")
	},
};