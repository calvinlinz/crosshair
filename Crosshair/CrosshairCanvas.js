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
        canvas.width = canvas.offsetWidth;
	    canvas.height = canvas.offsetHeight;
        canvas.imageSmoothingEnabled = false;

        const context = canvas.getContext('2d');
        if(!context){
            return;
        }
        context.translate(0.5,0);

        
        const centerX = canvas.width /2;
        const centerY = canvas.height /2;
        context.fillStyle = colour;
        context.lineWidth = player.crosshair.primary.outlineThickness;
            if(player.crosshair.primary.centerDot && player.crosshair.primary.centerDotOpacity >0){
                if(player.crosshair.primary.outlines){
                    context.strokeStyle = "black";
                    context.globalAlpha = player.crosshair.primary.outlineOpacity;
                    context.strokeRect(
                    centerX-.5-player.crosshair.primary.centerDotThickness/2,
                    centerY-.5-player.crosshair.primary.centerDotThickness/2,
                    player.crosshair.primary.centerDotThickness+1, 
                    player.crosshair.primary.centerDotThickness+1);
                }
                context.globalAlpha = player.crosshair.primary.centerDotOpacity;
                context.fillRect(
                centerX - player.crosshair.primary.centerDotThickness/2,
                centerY - player.crosshair.primary.centerDotThickness/2, 
                player.crosshair.primary.centerDotThickness,
                player.crosshair.primary.centerDotThickness);
            }

        if(player.crosshair.inner.showLines ){
            if(player.crosshair.primary.outlines && player.crosshair.inner.lineThickness !=0 && player.crosshair.inner.lineLength != 0 ){
                context.globalAlpha = player.crosshair.primary.outlineOpacity;
                context.strokeRect(
                centerX -.5- player.crosshair.inner.lineOffset - player.crosshair.inner.lineLength,
                centerY -.5- player.crosshair.inner.lineThickness/2, 
                player.crosshair.inner.lineLength+1,
                player.crosshair.inner.lineThickness+1);

                context.strokeRect(
                centerX -.5+ player.crosshair.inner.lineOffset,
                centerY -.5- player.crosshair.inner.lineThickness/2,
                player.crosshair.inner.lineLength+1,
                player.crosshair.inner.lineThickness+1);

                context.strokeRect(
                centerX -.5- player.crosshair.inner.lineThickness/2,
                centerY -.5 -player.crosshair.inner.lineOffset- player.crosshair.inner.lineLength,
                player.crosshair.inner.lineThickness+1,
                player.crosshair.inner.lineLength+1);

                context.strokeRect(
                centerX-.5-player.crosshair.inner.lineThickness/2,
                centerY -.5+ player.crosshair.inner.lineOffset,
                player.crosshair.inner.lineThickness+1,
                player.crosshair.inner.lineLength+1);
            }
            if(player.crosshair.inner.lineThickness !=0 && player.crosshair.inner.lineLength != 0){
                context.globalAlpha = player.crosshair.inner.lineOpacity;
                context.fillRect(
                centerX - player.crosshair.inner.lineOffset - player.crosshair.inner.lineLength,
                centerY - player.crosshair.inner.lineThickness/2, 
                player.crosshair.inner.lineLength,
                player.crosshair.inner.lineThickness);

                context.fillRect(
                centerX + player.crosshair.inner.lineOffset,
                centerY - player.crosshair.inner.lineThickness/2,
                player.crosshair.inner.lineLength,
                player.crosshair.inner.lineThickness);

                context.fillRect(
                centerX - player.crosshair.inner.lineThickness/2,
                centerY - player.crosshair.inner.lineOffset- player.crosshair.inner.lineLength,
                player.crosshair.inner.lineThickness,
                player.crosshair.inner.lineLength);

                context.fillRect(
                centerX-player.crosshair.inner.lineThickness/2,
                centerY + player.crosshair.inner.lineOffset,
                player.crosshair.inner.lineThickness,
                player.crosshair.inner.lineLength);
            }
        }
                
         
        

        if(player.crosshair.outer.showLines ){
            if(player.crosshair.primary.outlines && player.crosshair.outer.lineThickness !=0 && player.crosshair.outer.lineLength != 0 ){
                context.strokeStyle = 'black';
                context.globalAlpha = player.crosshair.primary.outlineOpacity;
                context.strokeRect(
                centerX - player.crosshair.outer.lineOffset - player.crosshair.outer.lineLength,
                centerY - player.crosshair.outer.lineThickness/2, 
                player.crosshair.outer.lineLength,
                player.crosshair.outer.lineThickness);

                context.strokeRect(
                centerX -.5+ player.crosshair.outer.lineOffset,
                centerY -.5- player.crosshair.outer.lineThickness/2,
                player.crosshair.outer.lineLength+1,
                player.crosshair.outer.lineThickness+1);

                context.strokeRect(
                centerX -.5- player.crosshair.outer.lineThickness/2,
                centerY -.5- player.crosshair.outer.lineOffset- player.crosshair.outer.lineLength,
                player.crosshair.outer.lineThickness+1,
                player.crosshair.outer.lineLength+1);

                context.strokeRect(
                centerX-.5-player.crosshair.outer.lineThickness/2,
                centerY -.5+ player.crosshair.outer.lineOffset,
                player.crosshair.outer.lineThickness+1,
                player.crosshair.outer.lineLength+1);
            }
            if(player.crosshair.outer.lineThickness !=0 && player.crosshair.outer.lineLength != 0){
                context.globalAlpha = player.crosshair.outer.lineOpacity;
                context.fillRect(
                centerX - player.crosshair.outer.lineOffset - player.crosshair.outer.lineLength,
                centerY - player.crosshair.outer.lineThickness/2, 
                player.crosshair.outer.lineLength,
                player.crosshair.outer.lineThickness);

                context.fillRect(
                centerX + player.crosshair.outer.lineOffset,
                centerY - player.crosshair.outer.lineThickness/2,
                player.crosshair.outer.lineLength,
                player.crosshair.outer.lineThickness);

                context.fillRect(
                centerX - player.crosshair.outer.lineThickness/2,
                centerY - player.crosshair.outer.lineOffset- player.crosshair.outer.lineLength,
                player.crosshair.outer.lineThickness,
                player.crosshair.outer.lineLength);

                context.fillRect(
                centerX-player.crosshair.outer.lineThickness/2,
                centerY + player.crosshair.outer.lineOffset,
                player.crosshair.outer.lineThickness,
                player.crosshair.outer.lineLength);
            }
        }
    
    }, [])

    return <canvas ref = {canvasRef}/> 

};

export default CrosshairCanvas;