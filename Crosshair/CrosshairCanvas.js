import { withRouter } from 'next/router';
import React from 'react';
import { useRef , useEffect } from 'react';

const CrosshairCanvas = (player) =>{
    const canvasRef = useRef(null);

    let colour = player.crosshair.primary.crosshairColor;


        switch(colour){
            case 'white':
                colour = 'white';
                break;
            case 'green':
                colour ='#00FF00';
                break;
            case 'yellow green':
                colour ="75DB01";
                break;
            case 'green yellow':
                colour ="89FF00";
                break;
            case 'yellow':
                colour="#FFFF00";
                break;
            case 'cyan':
                colour="#00FFFF";
                break;
            case 'pink':
                colour="#FF00FF";
                break;
            case 'red':
                colour="FF0000";
                break;
        }
    

    useEffect(() => {
        const canvas = canvasRef.current;
        if(!canvas){
            return;
        }
        const context = canvas.getContext('2d');
        if(!context){
            return;
        }
        const centerX = canvas.width /2;
        const centerY = canvas.height /2;
        context.fillStyle = colour;
        context.lineWidth = 1.5;
     
            context.fillStyle = colour;
            context.globalAlpha = player.crosshair.primary.centerDotOpacity;
            context.fillRect(centerX - player.crosshair.primary.centerDotThickness/2, centerY - player.crosshair.primary.centerDotThickness/2, player.crosshair.primary.centerDotThickness, player.crosshair.primary.centerDotThickness);
            if(player.crosshair.primary.centerDot){
                if(player.crosshair.primary.outlines){
                    context.strokeStyle = "black";
                 context.globalAlpha = player.crosshair.primary.centerDotOpacity;
                 context.strokeRect(centerX - player.crosshair.primary.centerDotThickness/2, centerY-player.crosshair.primary.centerDotThickness/2, player.crosshair.primary.centerDotThickness, player.crosshair.primary.centerDotThickness);
                }
        }

        if(player.crosshair.inner.showLines){
            context.globalAlpha = player.crosshair.inner.lineOpacity;
            if(player.crosshair.primary.outlines){
                context.strokeStyle = 'black';
                context.globalAlpha = player.crosshair.primary.outlineOpacity;
                if(player.crosshair.inner.lineOffset <=1){
                    context.strokeRect(centerX -.25 - player.crosshair.inner.lineOffset - player.crosshair.inner.lineLength/2,centerY - .25- player.crosshair.inner.lineThickness/2,player.crosshair.inner.lineLength+.5,player.crosshair.inner.lineThickness+.5);
                    context.strokeRect(centerX -.25 + player.crosshair.inner.lineOffset - player.crosshair.inner.lineLength/2,centerY - .25-player.crosshair.inner.lineThickness/2,player.crosshair.inner.lineLength+.5,player.crosshair.inner.lineThickness+.5);
                    context.strokeRect(centerX - .25-player.crosshair.inner.lineThickness/2,centerY + player.crosshair.inner.lineOffset- .25 -player.crosshair.inner.lineLength/2,player.crosshair.inner.lineThickness+.5,player.crosshair.inner.lineLength+.5);
                    context.strokeRect(centerX - .25-player.crosshair.inner.lineThickness/2,centerY - player.crosshair.inner.lineOffset-.25-player.crosshair.inner.lineLength/2,player.crosshair.inner.lineThickness+.5,player.crosshair.inner.lineLength+.5);
                }else {
                    context.strokeRect(centerX - player.crosshair.inner.lineOffset-2 - player.crosshair.inner.lineLength/2,centerY -player.crosshair.inner.lineThickness/2,player.crosshair.inner.lineLength,player.crosshair.inner.lineThickness);
                    context.strokeRect(centerX + player.crosshair.inner.lineOffset+2 - player.crosshair.inner.lineLength/2,centerY -player.crosshair.inner.lineThickness/2,player.crosshair.inner.lineLength,player.crosshair.inner.lineThickness);
                    context.strokeRect(centerX - player.crosshair.inner.lineThickness/2,centerY + player.crosshair.inner.lineOffset+2-player.crosshair.inner.lineLength/2,player.crosshair.inner.lineThickness,player.crosshair.inner.lineLength);
                    context.strokeRect(centerX - player.crosshair.inner.lineThickness/2,centerY - player.crosshair.inner.lineOffset-2-player.crosshair.inner.lineLength/2,player.crosshair.inner.lineThickness,player.crosshair.inner.lineLength);
                }

            }
            context.globalAlpha = player.crosshair.inner.lineOpacity;
            context.fillStyle = colour;
            if(player.crosshair.inner.lineOffset <=1){
                context.fillRect(centerX - player.crosshair.inner.lineOffset - player.crosshair.inner.lineLength/2,centerY -player.crosshair.inner.lineThickness/2,player.crosshair.inner.lineLength,player.crosshair.inner.lineThickness);
                context.fillRect(centerX + player.crosshair.inner.lineOffset - player.crosshair.inner.lineLength/2,centerY -player.crosshair.inner.lineThickness/2,player.crosshair.inner.lineLength,player.crosshair.inner.lineThickness);
                context.fillRect(centerX - player.crosshair.inner.lineThickness/2,centerY + player.crosshair.inner.lineOffset-player.crosshair.inner.lineLength/2,player.crosshair.inner.lineThickness,player.crosshair.inner.lineLength);
                context.fillRect(centerX - player.crosshair.inner.lineThickness/2,centerY - player.crosshair.inner.lineOffset-player.crosshair.inner.lineLength/2,player.crosshair.inner.lineThickness,player.crosshair.inner.lineLength);
            }else {
                context.fillRect(centerX - player.crosshair.inner.lineOffset-2 - player.crosshair.inner.lineLength/2,centerY -player.crosshair.inner.lineThickness/2,player.crosshair.inner.lineLength,player.crosshair.inner.lineThickness);
                context.fillRect(centerX + player.crosshair.inner.lineOffset+2 - player.crosshair.inner.lineLength/2,centerY -player.crosshair.inner.lineThickness/2,player.crosshair.inner.lineLength,player.crosshair.inner.lineThickness);
                context.fillRect(centerX - player.crosshair.inner.lineThickness/2,centerY + player.crosshair.inner.lineOffset+2-player.crosshair.inner.lineLength/2,player.crosshair.inner.lineThickness,player.crosshair.inner.lineLength);
                context.fillRect(centerX - player.crosshair.inner.lineThickness/2,centerY - player.crosshair.inner.lineOffset-2-player.crosshair.inner.lineLength/2,player.crosshair.inner.lineThickness,player.crosshair.inner.lineLength);
            }
            
        }

        if(player.crosshair.outer.showLines){
            if(player.crosshair.primary.outlines){
                context.strokeStyle = 'black';
                context.globalAlpha = player.crosshair.primary.outlineOpacity;
                if(player.crosshair.inner.lineOffset <=1){
                    context.strokeRect(centerX - player.crosshair.outer.lineOffset-2 - player.crosshair.outer.lineLength/2,centerY -player.crosshair.outer.lineThickness/2,player.crosshair.outer.lineLength,player.crosshair.outer.lineThickness);
                    context.strokeRect(centerX + player.crosshair.outer.lineOffset+2 - player.crosshair.outer.lineLength/2,centerY -player.crosshair.outer.lineThickness/2,player.crosshair.outer.lineLength,player.crosshair.outer.lineThickness);
                    context.strokeRect(centerX - player.crosshair.outer.lineThickness/2,centerY + player.crosshair.outer.lineOffset+2-player.crosshair.outer.lineLength/2,player.crosshair.outer.lineThickness,player.crosshair.outer.lineLength);
                    context.strokeRect(centerX - player.crosshair.outer.lineThickness/2,centerY - player.crosshair.outer.lineOffset-2-player.crosshair.outer.lineLength/2,player.crosshair.outer.lineThickness,player.crosshair.outer.lineLength);
                    }
                    else{
                    context.strokeRect(centerX - player.crosshair.outer.lineOffset - player.crosshair.outer.lineLength/2,centerY -player.crosshair.outer.lineThickness/2,player.crosshair.outer.lineLength,player.crosshair.outer.lineThickness);
                    context.strokeRect(centerX + player.crosshair.outer.lineOffset - player.crosshair.outer.lineLength/2,centerY -player.crosshair.outer.lineThickness/2,player.crosshair.outer.lineLength,player.crosshair.outer.lineThickness);
                    context.strokeRect(centerX - player.crosshair.outer.lineThickness/2,centerY + player.crosshair.outer.lineOffset-player.crosshair.outer.lineLength/2,player.crosshair.outer.lineThickness,player.crosshair.outer.lineLength);
                    context.strokeRect(centerX - player.crosshair.outer.lineThickness/2,centerY - player.crosshair.outer.lineOffset-player.crosshair.outer.lineLength/2,player.crosshair.outer.lineThickness,player.crosshair.outer.lineLength);
                    }
                
            }
            context.globalAlpha = player.crosshair.outer.lineOpacity;
            if(player.crosshair.inner.lineOffset <=1){
            context.fillRect(centerX - player.crosshair.outer.lineOffset-2 - player.crosshair.outer.lineLength/2,centerY -player.crosshair.outer.lineThickness/2,player.crosshair.outer.lineLength,player.crosshair.outer.lineThickness);
            context.fillRect(centerX + player.crosshair.outer.lineOffset+2 - player.crosshair.outer.lineLength/2,centerY -player.crosshair.outer.lineThickness/2,player.crosshair.outer.lineLength,player.crosshair.outer.lineThickness);
            context.fillRect(centerX - player.crosshair.outer.lineThickness/2,centerY + player.crosshair.outer.lineOffset+2-player.crosshair.outer.lineLength/2,player.crosshair.outer.lineThickness,player.crosshair.outer.lineLength);
            context.fillRect(centerX - player.crosshair.outer.lineThickness/2,centerY - player.crosshair.outer.lineOffset-2-player.crosshair.outer.lineLength/2,player.crosshair.outer.lineThickness,player.crosshair.outer.lineLength);
            }
            else{
            context.fillRect(centerX - player.crosshair.outer.lineOffset - player.crosshair.outer.lineLength/2,centerY -player.crosshair.outer.lineThickness/2,player.crosshair.outer.lineLength,player.crosshair.outer.lineThickness);
            context.fillRect(centerX + player.crosshair.outer.lineOffset - player.crosshair.outer.lineLength/2,centerY -player.crosshair.outer.lineThickness/2,player.crosshair.outer.lineLength,player.crosshair.outer.lineThickness);
            context.fillRect(centerX - player.crosshair.outer.lineThickness/2,centerY + player.crosshair.outer.lineOffset-player.crosshair.outer.lineLength/2,player.crosshair.outer.lineThickness,player.crosshair.outer.lineLength);
            context.fillRect(centerX - player.crosshair.outer.lineThickness/2,centerY - player.crosshair.outer.lineOffset-player.crosshair.outer.lineLength/2,player.crosshair.outer.lineThickness,player.crosshair.outer.lineLength);
            }
        }
    }, [])

    return <canvas ref = {canvasRef}/> 

};

export default CrosshairCanvas;