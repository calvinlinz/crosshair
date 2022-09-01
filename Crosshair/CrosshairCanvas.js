import React from 'react';
import { useRef , useEffect } from 'react';

export default function CrosshairCanvas (Crosshair){
    const canvasRef = useRef(null);
    let colour = Crosshair.player.crosshair.primary.crosshairColor;

        switch(colour){
            case 'white':
                colour = 'white';
                break;
            case 'green':
                colour ='#00FF00';
                break;
            case 'yellow green':
                colour ="#89FF00";
                break;
            case 'green yellow':
                colour ="#FFFF00";
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
            case 'Red':
                colour="FF0000";
                break;
        }
    

    useEffect(() => {
        const canvas = canvasRef.current;
        if(!canvas){
            return;
        }
      
        canvas.imageSmoothingEnabled = "false";

        const context = canvas.getContext('2d');
        if(!context){
            return;
        }

        context.translate(0.5,0.5);
        context.scale(1.5,1.5);

        canvas.width = "135";
        canvas.height = "135";
 

        
        const centerX = canvas.width /2;
        const centerY = canvas.height /2;
        context.fillStyle = colour;
        context.lineWidth = Crosshair.player.crosshair.primary.outlineThickness;
        
        if(Crosshair.player.crosshair.primary.inner.showLines ){
            if(Crosshair.player.crosshair.primary.inner.lineThickness !=0 && Crosshair.player.crosshair.primary.inner.lineLength != 0){
                context.globalAlpha = Crosshair.player.crosshair.primary.inner.lineOpacity;
                context.fillRect(
                centerX - Crosshair.player.crosshair.primary.inner.lineOffset - Crosshair.player.crosshair.primary.inner.lineLength,
                centerY - Crosshair.player.crosshair.primary.inner.lineThickness/2, 
                Crosshair.player.crosshair.primary.inner.lineLength,
                Crosshair.player.crosshair.primary.inner.lineThickness);

                context.fillRect(
                centerX + Crosshair.player.crosshair.primary.inner.lineOffset,
                centerY - Crosshair.player.crosshair.primary.inner.lineThickness/2,
                Crosshair.player.crosshair.primary.inner.lineLength,
                Crosshair.player.crosshair.primary.inner.lineThickness);

                context.fillRect(
                centerX - Crosshair.player.crosshair.primary.inner.lineThickness/2,
                centerY - Crosshair.player.crosshair.primary.inner.lineOffset- Crosshair.player.crosshair.primary.inner.lineLength,
                Crosshair.player.crosshair.primary.inner.lineThickness,
                Crosshair.player.crosshair.primary.inner.lineLength);

                context.fillRect(
                centerX-Crosshair.player.crosshair.primary.inner.lineThickness/2,
                centerY + Crosshair.player.crosshair.primary.inner.lineOffset,
                Crosshair.player.crosshair.primary.inner.lineThickness,
                Crosshair.player.crosshair.primary.inner.lineLength);
            }
            if(Crosshair.player.crosshair.primary.outlines && Crosshair.player.crosshair.primary.inner.lineThickness !=0 && Crosshair.player.crosshair.primary.inner.lineLength != 0 ){
                context.globalAlpha = Crosshair.player.crosshair.primary.outlineOpacity;
                context.strokeRect(
                centerX - Crosshair.player.crosshair.primary.inner.lineOffset - Crosshair.player.crosshair.primary.inner.lineLength - context.lineWidth/2,
                centerY - Crosshair.player.crosshair.primary.inner.lineThickness/2 - context.lineWidth/2, 
                Crosshair.player.crosshair.primary.inner.lineLength + context.lineWidth,
                Crosshair.player.crosshair.primary.inner.lineThickness+ context.lineWidth);

                context.strokeRect(
                centerX + Crosshair.player.crosshair.primary.inner.lineOffset - context.lineWidth/2,
                centerY - Crosshair.player.crosshair.primary.inner.lineThickness/2 - context.lineWidth/2,
                Crosshair.player.crosshair.primary.inner.lineLength + context.lineWidth,
                Crosshair.player.crosshair.primary.inner.lineThickness + context.lineWidth);

                context.strokeRect(
                centerX - Crosshair.player.crosshair.primary.inner.lineThickness/2 - context.lineWidth/2,
                centerY -Crosshair.player.crosshair.primary.inner.lineOffset- Crosshair.player.crosshair.primary.inner.lineLength - context.lineWidth/2,
                Crosshair.player.crosshair.primary.inner.lineThickness + context.lineWidth,
                Crosshair.player.crosshair.primary.inner.lineLength + context.lineWidth);

                context.strokeRect(
                centerX-Crosshair.player.crosshair.primary.inner.lineThickness/2 - context.lineWidth/2,
                centerY + Crosshair.player.crosshair.primary.inner.lineOffset - context.lineWidth/2,
                Crosshair.player.crosshair.primary.inner.lineThickness + context.lineWidth,
                Crosshair.player.crosshair.primary.inner.lineLength + context.lineWidth);
            }
        }
                
         
        

        if(Crosshair.player.crosshair.primary.outer.showLines ){
            if(Crosshair.player.crosshair.primary.outer.lineThickness !=0 && Crosshair.player.crosshair.primary.outer.lineLength != 0){
                context.globalAlpha = Crosshair.player.crosshair.primary.outer.lineOpacity;
                context.fillRect(
                centerX - Crosshair.player.crosshair.primary.outer.lineOffset - Crosshair.player.crosshair.primary.outer.lineLength,
                centerY - Crosshair.player.crosshair.primary.outer.lineThickness/2, 
                Crosshair.player.crosshair.primary.outer.lineLength,
                Crosshair.player.crosshair.primary.outer.lineThickness);

                context.fillRect(
                centerX + Crosshair.player.crosshair.primary.outer.lineOffset,
                centerY - Crosshair.player.crosshair.primary.outer.lineThickness/2,
                Crosshair.player.crosshair.primary.outer.lineLength,
                Crosshair.player.crosshair.primary.outer.lineThickness);

                context.fillRect(
                centerX - Crosshair.player.crosshair.primary.outer.lineThickness/2,
                centerY - Crosshair.player.crosshair.primary.outer.lineOffset- Crosshair.player.crosshair.primary.outer.lineLength,
                Crosshair.player.crosshair.primary.outer.lineThickness,
                Crosshair.player.crosshair.primary.outer.lineLength);

                context.fillRect(
                centerX-Crosshair.player.crosshair.primary.outer.lineThickness/2,
                centerY + Crosshair.player.crosshair.primary.outer.lineOffset,
                Crosshair.player.crosshair.primary.outer.lineThickness,
                Crosshair.player.crosshair.primary.outer.lineLength);
            }
            if(Crosshair.player.crosshair.primary.outlines && Crosshair.player.crosshair.primary.outer.lineThickness !=0 && Crosshair.player.crosshair.primary.outer.lineLength != 0 ){
                context.globalAlpha = Crosshair.player.crosshair.primary.outlineOpacity;
                context.strokeRect(
                    centerX - Crosshair.player.crosshair.primary.outer.lineOffset - Crosshair.player.crosshair.primary.outer.lineLength - context.lineWidth/2,
                    centerY - Crosshair.player.crosshair.primary.outer.lineThickness/2 - context.lineWidth/2, 
                    Crosshair.player.crosshair.primary.outer.lineLength + context.lineWidth,
                    Crosshair.player.crosshair.primary.outer.lineThickness+ context.lineWidth);
    
                    context.strokeRect(
                    centerX + Crosshair.player.crosshair.primary.outer.lineOffset - context.lineWidth/2,
                    centerY - Crosshair.player.crosshair.primary.outer.lineThickness/2 - context.lineWidth/2,
                    Crosshair.player.crosshair.primary.outer.lineLength + context.lineWidth,
                    Crosshair.player.crosshair.primary.outer.lineThickness + context.lineWidth);
    
                    context.strokeRect(
                    centerX - Crosshair.player.crosshair.primary.outer.lineThickness/2 - context.lineWidth/2,
                    centerY -Crosshair.player.crosshair.primary.outer.lineOffset- Crosshair.player.crosshair.primary.outer.lineLength - context.lineWidth/2,
                    Crosshair.player.crosshair.primary.outer.lineThickness + context.lineWidth,
                    Crosshair.player.crosshair.primary.outer.lineLength + context.lineWidth);
    
                    context.strokeRect(
                    centerX-Crosshair.player.crosshair.primary.outer.lineThickness/2 - context.lineWidth/2,
                    centerY + Crosshair.player.crosshair.primary.outer.lineOffset - context.lineWidth/2,
                    Crosshair.player.crosshair.primary.outer.lineThickness + context.lineWidth,
                    Crosshair.player.crosshair.primary.outer.lineLength + context.lineWidth);
            }
        }

        if(Crosshair.player.crosshair.primary.centerDot && Crosshair.player.crosshair.primary.centerDotOpacity >0){
            context.globalAlpha = Crosshair.player.crosshair.primary.centerDotOpacity;
            context.fillRect(
            centerX - Crosshair.player.crosshair.primary.centerDotThickness/2,
            centerY - Crosshair.player.crosshair.primary.centerDotThickness/2, 
            Crosshair.player.crosshair.primary.centerDotThickness,
            Crosshair.player.crosshair.primary.centerDotThickness);
            if(Crosshair.player.crosshair.primary.outlines){
                context.strokeStyle = "black";
                context.globalAlpha = Crosshair.player.crosshair.primary.outlineOpacity;
                context.strokeRect(
                centerX-Crosshair.player.crosshair.primary.centerDotThickness/2 - context.lineWidth/2,
                centerY-Crosshair.player.crosshair.primary.centerDotThickness/2 - context.lineWidth/2,
                Crosshair.player.crosshair.primary.centerDotThickness + context.lineWidth, 
                Crosshair.player.crosshair.primary.centerDotThickness + context.lineWidth);
            }
        }

    
    },[Crosshair])

    return <canvas ref = {canvasRef}/> 

};

