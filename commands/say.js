const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('say')
		.setDescription('Says you told them to say')
        .addStringOption(option => option.setName('input').setDescription('The input to echo back').setRequired(true)),
	async execute(interaction) {
        const sayMessage = interaction.options.getString('input');
		interaction.reply(sayMessage)
	},
};



