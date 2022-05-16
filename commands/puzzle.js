const {Chess} = require("fix-esm").require("chess.js");
const axios = require('axios')
const { SlashCommandBuilder } = require('@discordjs/builders');
const convertFenToCanvas = require('../convertFenToCanvas')
require('dotenv').config()
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
              'X-RapidAPI-Key': process.env.X_API_RAPID_KEY
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

