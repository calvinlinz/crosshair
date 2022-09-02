export const jsonToVal = (player) =>{
    
    const colour = player.crosshair.primary.crosshairColor;
    const playerVal = "0;P;";
    // colour
    if(colour != "white"){
        switch(colour){
            case 'green':
                playerVal +="c;1;";
                break;
            case 'yellow green':
                playerVal +="c;2;";
                break;
            case 'green yellow':
                playerVal +="c;3;";
                break;
            case 'yellow':
                playerVal+="c;4;";
                break;
            case 'cyan':
                playerVal+="c;5;";
                break;
            case 'pink':
                playerVal+="c;6;";
                break;
            case 'red':
                playerVal+="c;7;";
                break;
        }
    }

    //primary outlines
    if(player.crosshair.primary.outlines == false){ // outlines off
        playerVal += "h;0;";
    }else{ // outlines on
        playerVal += `t;${player.crosshair.primary.outlineThickness};o;${player.crosshair.primary.outlineOpacity};`;
    }

    //centerDot
    if(player.crosshair.primary.centerDot == true){
        //dot opacity and thickness
        playerVal +=`d;${player.crosshair.primary.centerDotOpacity};z;${player.crosshair.primary.centerDotThickness};`;
    }
 
    //override firing error offset
    if(player.crosshair.primary.overrideFiringErrorOffsetWithCrosshairOffset == true){
        playerVal+="m;1;";
    }

    //inner lines
    if(player.crosshair.primary.inner.showLines == true){
        playerVal+=`0t;${player.crosshair.primary.inner.lineThickness};0l;${player.crosshair.primary.inner.lineLength};0o;${player.crosshair.primary.inner.lineOffset};0a;${player.crosshair.primary.inner.lineOpacity};`
        if(player.crosshair.primary.inner.lineMovementError){
            playerVal+=`0m;1;0s;${player.crosshair.primary.inner.lineMovementErrorMultiplier};`
        }
        if(player.crosshair.primary.inner.lineFiringError == true){
            playerVal+=`0e;${player.crosshair.primary.inner.lineFiringErrorMultiplier};`;
        }else{
            playerVal+=`0f;0;`;
        }
    }else{
        playerVal+=`0b;0;`;
    }
    //outer lines
    if(player.crosshair.primary.outer.showLines){
        playerVal+=`1t;${player.crosshair.primary.outer.lineThickness};1l;${player.crosshair.primary.outer.lineLength};1o;${player.crosshair.primary.outer.lineOffset};1a;${player.crosshair.primary.outer.lineOpacity};`
        if(player.crosshair.primary.outer.lineMovementError){
            playerVal+=`1m;1;1s;${player.crosshair.primary.outer.lineMovementErrorMultiplier};`
        }
        if(player.crosshair.primary.outer.lineFiringError){
            playerVal+=`1e;${player.crosshair.primary.outer.lineFiringErrorMultiplier}`;
        }else{
            playerVal+=`1f;0`;
        }
    }else{
        playerVal+="1b;0";
    }

    return playerVal;
    
}