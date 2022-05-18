function drawFigures(figuresArray, context) {
    let figureWidth = -80
    let figureHeight = 70
    let whiteColor = "#FFFFFF"
    let blackColor = "#000000"
        figuresArray.forEach((item) => {
            if (!isNaN(item)) {

                if (figureWidth === 660) {
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
                    context.fillStyle = blackColor;
                    figureWidth = figureWidth + 80
                    context.fillText(`\u265C`, figureWidth, figureHeight);
                    if (figureWidth === 660) {
                        figureHeight = figureHeight + 80
                        figureWidth = -80
                    }
                    break
                case 'n':
                    context.fillStyle = blackColor;
                    figureWidth = figureWidth + 80
                    context.fillText(`\u265E`, figureWidth, figureHeight);
                    if (figureWidth === 660) {
                        figureHeight = figureHeight + 80
                        figureWidth = -80
                    }
                    break
                case 'b':
                    context.fillStyle = blackColor;
                    figureWidth = figureWidth + 80
                    context.fillText(`\u265D`, figureWidth, figureHeight);
                    if (figureWidth === 660) {
                        figureHeight = figureHeight + 80
                        figureWidth = -80
                    }
                    break
                case 'q':
                    context.fillStyle = blackColor;
                    figureWidth = figureWidth + 80
                    context.fillText(`\u265B`, figureWidth, figureHeight);
                    if (figureWidth === 660) {
                        figureHeight = figureHeight + 80
                        figureWidth = -80
                    }
                    break
                case 'k':
                    context.fillStyle = blackColor;
                    figureWidth = figureWidth + 80
                    context.fillText(`\u265A`, figureWidth, figureHeight);
                    if (figureWidth === 660) {
                        figureHeight = figureHeight + 80
                        figureWidth = -80
                    }
                    break
                case 'p':
                    context.fillStyle = blackColor;
                    figureWidth = figureWidth + 80
                    context.fillText(`\u2659`, figureWidth, figureHeight);
                    if (figureWidth === 660) {
                        figureHeight = figureHeight + 80
                        figureWidth = -80
                    }
                    break
                case 'R':
                    context.fillStyle = whiteColor;
                    figureWidth = figureWidth + 80
                    context.fillText(`\u265C`, figureWidth, figureHeight);
                    if (figureWidth === 660) {
                        figureHeight = figureHeight + 80
                        figureWidth = -80
                    }
                    break
                case 'N':
                    context.fillStyle = whiteColor;
                    figureWidth = figureWidth + 80
                    context.fillText(`\u265E`, figureWidth, figureHeight);
                    if (figureWidth === 660) {
                        figureHeight = figureHeight + 80
                        figureWidth = -80
                    }
                    break
                case 'B':
                    context.fillStyle = whiteColor;
                    figureWidth = figureWidth + 80
                    context.fillText(`\u265D`, figureWidth, figureHeight);
                    if (figureWidth === 660) {
                        figureHeight = figureHeight + 80
                        figureWidth = -80
                    }
                    break
                case 'Q':
                    context.fillStyle = whiteColor;
                    figureWidth = figureWidth + 80
                    context.fillText(`\u265B`, figureWidth, figureHeight);
                    if (figureWidth === 660) {
                        figureHeight = figureHeight + 80
                        figureWidth = -80
                    }
                    break
                case 'K':
                    context.fillStyle = whiteColor;
                    figureWidth = figureWidth + 80
                    context.fillText(`\u265A`, figureWidth, figureHeight);
                    if (figureWidth === 660) {
                        figureHeight = figureHeight + 80
                        figureWidth = -80
                    }
                    break
                case 'P':
                    context.fillStyle = whiteColor;
                    figureWidth = figureWidth + 80
                    context.fillText(`\u2659`, figureWidth, figureHeight);
                    if (figureWidth === 660) {
                        figureHeight = figureHeight + 80
                        figureWidth = -80
                    }
                    break
            }
        })
   }
   
   module.exports = { drawFigures }