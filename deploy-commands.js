const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId} = require('./config.json');

require('dotenv').config()
const commands = [
	new SlashCommandBuilder().setName('daily').setDescription('Gets the daily puzzle from lichess'),
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	new SlashCommandBuilder().setName('play').setDescription('Starts the game'),
	new SlashCommandBuilder().setName('move').setDescription('Receives your move').addStringOption(option => option.setName('move').setDescription('your move').setRequired(true)),
	new SlashCommandBuilder().setName('say').setDescription('Says you told them to say').addStringOption(option => option.setName('input').setDescription('The input to echo back').setRequired(true)),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
