import React from 'react';
import { useRef , useEffect } from 'react';

export default function CrosshairCanvas (Crosshair){
    const canvasRef = useRef(null);
    
    let outer = Crosshair.player.crosshair.primary.outer;
    let primary = Crosshair.player.crosshair.primary;
    let inner = Crosshair.player.crosshair.primary.inner;

    
    let colour = primary.crosshairColor;

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
        context.lineWidth = primary.outlineThickness;
        
        if(inner.showLines ){
            if(inner.lineThickness !=0 && inner.lineLength != 0){
                context.globalAlpha = inner.lineOpacity;
                context.fillRect(centerX - inner.lineOffset - inner.lineLength,
                centerY - inner.lineThickness/2, 
                inner.lineLength,
                inner.lineThickness);

                context.fillRect(
                centerX + inner.lineOffset,
                centerY - inner.lineThickness/2,
                inner.lineLength,
                inner.lineThickness);

                context.fillRect(
                centerX - inner.lineThickness/2,
                centerY - inner.lineOffset- inner.lineLength,
                inner.lineThickness,
                inner.lineLength);

                context.fillRect(
                centerX-inner.lineThickness/2,
                centerY + inner.lineOffset,
                inner.lineThickness,
                inner.lineLength);
            }
            if(primary.outlines && inner.lineThickness !=0 && inner.lineLength != 0 ){
                context.globalAlpha = primary.outlineOpacity;
                context.strokeRect(
                centerX - inner.lineOffset - inner.lineLength - context.lineWidth/2,
                centerY - inner.lineThickness/2 - context.lineWidth/2, 
                inner.lineLength + context.lineWidth,
                inner.lineThickness+ context.lineWidth);

                context.strokeRect(
                centerX + inner.lineOffset - context.lineWidth/2,
                centerY - inner.lineThickness/2 - context.lineWidth/2,
                inner.lineLength + context.lineWidth,
                inner.lineThickness + context.lineWidth);

                context.strokeRect(
                centerX - inner.lineThickness/2 - context.lineWidth/2,
                centerY -inner.lineOffset- inner.lineLength - context.lineWidth/2,
                inner.lineThickness + context.lineWidth,
                inner.lineLength + context.lineWidth);

                context.strokeRect(
                centerX-inner.lineThickness/2 - context.lineWidth/2,
                centerY + inner.lineOffset - context.lineWidth/2,
                inner.lineThickness + context.lineWidth,
                inner.lineLength + context.lineWidth);
            }
        }
                
        if(outer.showLines ){
            if(outer.lineThickness !=0 && outer.lineLength != 0){
                context.globalAlpha = outer.lineOpacity;
                context.fillRect(
                centerX - outer.lineOffset - outer.lineLength,
                centerY - outer.lineThickness/2, 
                outer.lineLength,
                outer.lineThickness);

                context.fillRect(
                centerX + outer.lineOffset,
                centerY - outer.lineThickness/2,
                outer.lineLength,
                outer.lineThickness);

                context.fillRect(
                centerX - outer.lineThickness/2,
                centerY - outer.lineOffset- outer.lineLength,
                outer.lineThickness,
                outer.lineLength);

                context.fillRect(
                centerX-outer.lineThickness/2,
                centerY + outer.lineOffset,
                outer.lineThickness,
                outer.lineLength);
            }
            if(primary.outlines && outer.lineThickness !=0 && outer.lineLength != 0 ){
                context.globalAlpha = primary.outlineOpacity;
                context.strokeRect(
                    centerX - outer.lineOffset - outer.lineLength - context.lineWidth/2,
                    centerY - outer.lineThickness/2 - context.lineWidth/2, 
                    outer.lineLength + context.lineWidth,
                    outer.lineThickness+ context.lineWidth);
    
                    context.strokeRect(
                    centerX + outer.lineOffset - context.lineWidth/2,
                    centerY - outer.lineThickness/2 - context.lineWidth/2,
                    outer.lineLength + context.lineWidth,
                    outer.lineThickness + context.lineWidth);
    
                    context.strokeRect(
                    centerX - outer.lineThickness/2 - context.lineWidth/2,
                    centerY -outer.lineOffset- outer.lineLength - context.lineWidth/2,
                    outer.lineThickness + context.lineWidth,
                    outer.lineLength + context.lineWidth);
    
                    context.strokeRect(
                    centerX-outer.lineThickness/2 - context.lineWidth/2,
                    centerY + outer.lineOffset - context.lineWidth/2,
                    outer.lineThickness + context.lineWidth,
                    outer.lineLength + context.lineWidth);
            }
        }

        if(primary.centerDot && primary.centerDotOpacity >0){
            context.globalAlpha = primary.centerDotOpacity;
            context.fillRect(
            centerX - primary.centerDotThickness/2,
            centerY - primary.centerDotThickness/2, 
            primary.centerDotThickness,
            primary.centerDotThickness);
            if(primary.outlines){
                context.strokeStyle = "black";
                context.globalAlpha = primary.outlineOpacity;
                context.strokeRect(
                centerX-primary.centerDotThickness/2 - context.lineWidth/2,
                centerY-primary.centerDotThickness/2 - context.lineWidth/2,
                primary.centerDotThickness + context.lineWidth, 
                primary.centerDotThickness + context.lineWidth);
            }
        }

    
    },[Crosshair])

    return <canvas ref = {canvasRef}/> 

};

