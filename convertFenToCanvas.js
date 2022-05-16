const { createCanvas, Image } = require('@napi-rs/canvas')
const { readFile } = require('fs/promises');
const { MessageAttachment } = require('discord.js');
const { drawFigures } = require('./drawFigures.js');

module.exports = async function convertFenToCanvas(fenString) {
	const figuresArray = fenString.split(' ')[0].split('')

		const canvas = createCanvas(640, 640);
		const context = canvas.getContext('2d');

		const background = await readFile('./board.jpeg');
		const backgroundImage = new Image();
		backgroundImage.src = background;
		context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
		context.font = '80px Arial';
        drawFigures(figuresArray, context)

		return new MessageAttachment(canvas.toBuffer('image/jpeg'), 'board.png');
}
