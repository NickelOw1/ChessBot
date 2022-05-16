const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('move')
		.setDescription('Receives your move')
        .addStringOption(option => option.setName('move').setDescription('your move').setRequired(true)),

	async execute(interaction) {
		const playerMove = interaction.options.getString('move');
		interaction.reply(playerMove)
	},
};

