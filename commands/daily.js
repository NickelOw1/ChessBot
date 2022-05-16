const {Chess} = require("fix-esm").require("chess.js");
const axios = require('axios')
const { SlashCommandBuilder } = require('@discordjs/builders');
const convertFenToCanvas = require('../convertFenToCanvas')
const {uploadPosition} = require('../uploadPosition.js');
const { MessageEmbed } = require('discord.js');
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
        await interaction.deferReply();
		const attachment = await convertFenToCanvas(chess.fen())
        let nextMove = undefined
        if (chess.fen().split(" ")[1]=="b") {
            nextMove = "black"
        }
        if (chess.fen().split(" ")[1]=="w") {
            nextMove = "white"
        }
        const moveEmbed = new MessageEmbed()
        .setTitle(`${nextMove} next!`)
        const image = await axios.get("https://storage.yandexcloud.net/chessbot/positions/a8ac20d7-ef51-4126-b2f0-036d53d0b493", {
            responseType: 'arraybuffer'
          })
        await interaction.editReply({ embeds: [moveEmbed], files: [attachment]});

	},
};