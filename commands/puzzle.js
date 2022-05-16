const {Chess} = require("fix-esm").require("chess.js");
const axios = require('axios')
const { SlashCommandBuilder } = require('@discordjs/builders');
const convertFenToCanvas = require('../convertFenToCanvas')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('puzzle')
		.setDescription('Gets the random puzzle from lichess.org database'),
	async execute(interaction) {
        const options = {
            method: 'GET',
            url: 'https://chess-puzzles.p.rapidapi.com/',
            params: {

            },
            headers: {
              'X-RapidAPI-Host': 'chess-puzzles.p.rapidapi.com',
              'X-RapidAPI-Key': '8a9bdac111msh51d00e47248fcb5p193fe5jsn904e2eba2e96'
            }
          };
          
          const axiosResponse = await axios.request(options)
          console.log(axiosResponse.data.puzzles[0].fen)
          const attachment = await convertFenToCanvas(axiosResponse.data.puzzles[0].fen)
          await interaction.reply({ files: [attachment] });
          let fenNextMove = (axiosResponse.data.puzzles[0].fen.split(" "))[1]
          let nextMove = undefined
          if (fenNextMove =="b") {
              nextMove = "black"
          }
          if (fenNextMove =="w") {
              nextMove = "white"
          }
          
          await interaction.followUp(`${nextMove} next!`);
}};

