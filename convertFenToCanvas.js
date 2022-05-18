const { createCanvas, Image } = require('@napi-rs/canvas')
const { readFile } = require('fs/promises');
const { MessageAttachment } = require('discord.js');
const { drawFigures } = require('./drawFigures.js');

module.exports = async function convertFenToCanvas(fenString) {
    const figuresArray = fenString.split(' ')[0].split('')

	const canvas = createCanvas(640, 640);
	const context = canvas.getContext('2d');
	const background = await readFile('./board.png');
	const backgroundImage = new Image();
	backgroundImage.src = background;
	context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
	context.font = '80px Arial';
	const fullCanvas = createCanvas(684, 684)
	const fullContext = fullCanvas.getContext('2d')
	const fullBackground = await readFile('./boardwithnumbers.jpg')
	const fullBackgroundImage = new Image()
	fullBackgroundImage.src = fullBackground
	fullContext.drawImage(fullBackgroundImage, 0, 0, fullCanvas.width, fullCanvas.height)

    drawFigures(figuresArray, context)
	fullContext.drawImage(canvas, -22, -22, 662, 662)
	let attachment = new MessageAttachment(fullCanvas.toBuffer('image/jpeg'), 'board.png');
	return attachment
}
