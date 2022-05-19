export const jsonToVal = (Crosshairs, name) =>{
    const player = Crosshairs.filter(Crosshair => Crosshair.player_info.name == name);
    const colour = player[0].crosshair.primary.crosshairColor;
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
    if(player[0].crosshair.primary.outlines == false){ // outlines off
        playerVal += "h;0;";
    }else{ // outlines on
        playerVal += `t;${player[0].crosshair.primary.outlineThickness};o;${player[0].crosshair.primary.outlineOpacity};`;
    }

    //centerDot
    if(player[0].crosshair.primary.centerDot == true){
        //dot opacity and thickness
        playerVal +=`d;${player[0].crosshair.primary.centerDotOpacity};z;${player[0].crosshair.primary.centerDotThickness};`;
    }
 
    //override firing error offset
    if(player[0].crosshair.primary.overrideFiringErrorOffsetWithCrosshairOffset == true){
        playerVal+="m;1;";
    }

    //inner lines
    if(player[0].crosshair.inner.showLines == true){
        playerVal+=`0t;${player[0].crosshair.inner.lineThickness};0l;${player[0].crosshair.inner.lineLength};0o;${player[0].crosshair.inner.lineOffset};0a;${player[0].crosshair.inner.lineOpacity};`
        if(player[0].crosshair.inner.lineMovementError){
            playerVal+=`0m;1;0s;${player[0].crosshair.inner.lineMovementErrorMultiplier};`
        }
        if(player[0].crosshair.inner.lineFiringError == true){
            playerVal+=`0e;${player[0].crosshair.inner.lineFiringErrorMultiplier};`;
        }else{
            playerVal+=`0f;0;`;
        }
    }else{
        playerVal+=`0b;0;`;
    }
    //outer lines
    if(player[0].crosshair.outer.showLines){
        playerVal+=`1t;${player[0].crosshair.outer.lineThickness};1l;${player[0].crosshair.outer.lineLength};1o;${player[0].crosshair.outer.lineOffset};1a;${player[0].crosshair.outer.lineOpacity};`
        if(player[0].crosshair.outer.lineMovementError){
            playerVal+=`1m;1;1s;${player[0].crosshair.outer.lineMovementErrorMultiplier};`
        }
        if(player[0].crosshair.outer.lineFiringError){
            playerVal+=`1e;${player[0].crosshair.outer.lineFiringErrorMultiplier}`;
        }else{
            playerVal+=`1f;0`;
        }
    }else{
        playerVal+="1b;0";
    }

    return playerVal;
    
}