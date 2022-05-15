function drawFigures(figuresArray, context) {
    let figureWidth = -80
    let figureHeight = 70
        figuresArray.forEach((item) => {
            if (!isNaN(item)&&item!=0) {

                if (figureWidth == 660) {
                    figureHeight = figureHeight + 80
                    figureWidth = -80
                }
                figureWidth = figureWidth + item*80
            }
            switch(item) {
                case '/': 
                    figureHeight = figureHeight + 80
                    figureWidth = -80
                    break
                case 'r':
                    context.fillStyle = '#000000';
                    figureWidth = figureWidth + 80
                    context.fillText(`\u2656`, figureWidth, figureHeight);
                    if (figureWidth == 660) {
                        figureHeight = figureHeight + 80
                        figureWidth = -80
                    }
                    break
                case 'n':
                    context.fillStyle = '#000000';
                    figureWidth = figureWidth + 80
                    context.fillText(`\u2658`, figureWidth, figureHeight);
                    if (figureWidth == 660) {
                        figureHeight = figureHeight + 80
                        figureWidth = -80
                    }
                    break
                case 'b':
                    context.fillStyle = '#000000';
                    figureWidth = figureWidth + 80
                    context.fillText(`\u2657`, figureWidth, figureHeight);
                    if (figureWidth == 660) {
                        figureHeight = figureHeight + 80
                        figureWidth = -80
                    }
                    break
                case 'q':
                    context.fillStyle = '#000000';
                    figureWidth = figureWidth + 80
                    context.fillText(`\u2655`, figureWidth, figureHeight);
                    if (figureWidth == 660) {
                        figureHeight = figureHeight + 80
                        figureWidth = -80
                    }
                    break
                case 'k':
                    context.fillStyle = '#000000';
                    figureWidth = figureWidth + 80
                    context.fillText(`\u2654`, figureWidth, figureHeight);
                    if (figureWidth == 660) {
                        figureHeight = figureHeight + 80
                        figureWidth = -80
                    }
                    break
                case 'p':
                    context.fillStyle = '#000000';
                    figureWidth = figureWidth + 80
                    context.fillText(`\u2659`, figureWidth, figureHeight);
                    if (figureWidth == 660) {
                        figureHeight = figureHeight + 80
                        figureWidth = -80
                    }
                    break
                case 'R':
                    context.fillStyle = '#ffffff';
                    figureWidth = figureWidth + 80
                    context.fillText(`\u2656`, figureWidth, figureHeight);
                    if (figureWidth == 660) {
                        figureHeight = figureHeight + 80
                        figureWidth = -80
                    }
                    break
                case 'N':
                    context.fillStyle = '#ffffff';
                    figureWidth = figureWidth + 80
                    context.fillText(`\u2658`, figureWidth, figureHeight);
                    if (figureWidth == 660) {
                        figureHeight = figureHeight + 80
                        figureWidth = -80
                    }
                    break
                case 'B':
                    context.fillStyle = '#ffffff';
                    figureWidth = figureWidth + 80
                    context.fillText(`\u2657`, figureWidth, figureHeight);
                    if (figureWidth == 660) {
                        figureHeight = figureHeight + 80
                        figureWidth = -80
                    }
                    break
                case 'Q':
                    context.fillStyle = '#ffffff';
                    figureWidth = figureWidth + 80
                    context.fillText(`\u2655`, figureWidth, figureHeight);
                    if (figureWidth == 660) {
                        figureHeight = figureHeight + 80
                        figureWidth = -80
                    }
                    break
                case 'K':
                    context.fillStyle = '#ffffff';
                    figureWidth = figureWidth + 80
                    context.fillText(`\u2654`, figureWidth, figureHeight);
                    if (figureWidth == 660) {
                        figureHeight = figureHeight + 80
                        figureWidth = -80
                    }
                    break
                case 'P':
                    context.fillStyle = '#ffffff';
                    figureWidth = figureWidth + 80
                    context.fillText(`\u2659`, figureWidth, figureHeight);
                    if (figureWidth == 660) {
                        figureHeight = figureHeight + 80
                        figureWidth = -80
                    }
                    break
            }
        })
   }
   
   module.exports = { drawFigures }