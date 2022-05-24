export const jsonToVal = (player) =>{
    const colour = player.crosshair.primary.crosshairColor;
    window.alert("HELLO");
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
    if(player.crosshair.inner.showLines == true){
        playerVal+=`0t;${player.crosshair.inner.lineThickness};0l;${player.crosshair.inner.lineLength};0o;${player.crosshair.inner.lineOffset};0a;${player.crosshair.inner.lineOpacity};`
        if(player.crosshair.inner.lineMovementError){
            playerVal+=`0m;1;0s;${player.crosshair.inner.lineMovementErrorMultiplier};`
        }
        if(player.crosshair.inner.lineFiringError == true){
            playerVal+=`0e;${player.crosshair.inner.lineFiringErrorMultiplier};`;
        }else{
            playerVal+=`0f;0;`;
        }
    }else{
        playerVal+=`0b;0;`;
    }
    //outer lines
    if(player.crosshair.outer.showLines){
        playerVal+=`1t;${player.crosshair.outer.lineThickness};1l;${player.crosshair.outer.lineLength};1o;${player.crosshair.outer.lineOffset};1a;${player.crosshair.outer.lineOpacity};`
        if(player.crosshair.outer.lineMovementError){
            playerVal+=`1m;1;1s;${player.crosshair.outer.lineMovementErrorMultiplier};`
        }
        if(player.crosshair.outer.lineFiringError){
            playerVal+=`1e;${player.crosshair.outer.lineFiringErrorMultiplier}`;
        }else{
            playerVal+=`1f;0`;
        }
    }else{
        playerVal+="1b;0";
    }

    return playerVal;
    
}