export default function createBaseCrosshair(){
    return ({
        player_info: {
            name: "TenZ",
            team: "Sentinels"
        },
        crosshair: {
            primary: {
                crosshairColor: "cyan",
                outlines: false,
                outlineOpacity: 1,
                outlineThickness: 1,
                centerDot: false,
                centerDotOpacity: 0,
                centerDotThickness: 1,
                overrideFiringErrorOffsetWithCrosshairOffset: true
            },
            inner: {
                showLines: true,
                lineOpacity: 1,
                lineLength: 4,
                lineThickness: 2,
                lineOffset: 2,
                lineMovementError: false,
                lineMovementErrorMultiplier: 1,
                lineFiringError: false,
                lineFiringErrorMultiplier: 1
            },
            outer: {
                showLines: false,
                lineOpacity: 0,
                lineLength: 0,
                lineThickness: 0,
                lineOffset: 0,
                lineMovementError: false,
                lineMovementErrorMultiplier: 1,
                lineFiringError: false,
                lineFiringErrorMultiplier: 1
            }
        }
    })
        
}