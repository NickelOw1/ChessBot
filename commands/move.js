const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('move')
		.setDescription('Receives your move')
        .addStringOption(option => option.setName('move').setDescription('your move').setRequired(true)),
		
	async execute(interaction) {
		const playerMove = interaction.options.getString('move');
		const channel = interaction.channel
		await (await channel.messages.fetch('975758033919569930')).edit("ne ladno")

		interaction.reply(playerMove)
	},
};

