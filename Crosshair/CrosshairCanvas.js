import React from 'react';
import { useRef , useEffect } from 'react';

const CrosshairCanvas = (Crosshairs, name) =>{
    const canvasRef = useRef(null);
    const player = Crosshairs.filter(Crosshair => Crosshair.player_info.name == name);
    const colour = player[0].crosshair.primary.crosshairColor;
    useEffect(() => {
        const canvas = canvasRef.current;
        if(!canvas){
            return;
        }

        const centerX = canvas.width /2;
        const centerY = canvas.height /2;
        const context = canvas.getContext('2d');
        if(!context){
            return;
        }
        
        context.fillStyle = player[0].crosshair.primary.crosshairColor;
        context.fillRect(centerX-2.5,centerY-2.5,5,5);
    }, [])

    console.log(canvasRef);

    return <canvas ref = {canvasRef}/> 

};

export default CrosshairCanvas;