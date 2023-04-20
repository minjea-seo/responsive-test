const calculateCardWidth = (
    pdLg,
    pdSm,
    screenWidth,
    leftNavWidth,
    dockWidth,
    breakpoints,
    noDockwhenScreenIsSmallerThan,
    noLefNavwhenScreenIsSmallerThan,
    leftNavExist,
    dockOpened
    ) =>{
 let possibleCardWidthRange = breakpoints.map((breakpoint,index)=>{
    let tempDockWidth = (dockOpened)?dockWidth:0
    let tempLeftNavWidth = (leftNavExist)?leftNavWidth:0
    let cardWidth = 0 
    if(
        breakpoint>noDockwhenScreenIsSmallerThan &&
        breakpoint>noLefNavwhenScreenIsSmallerThan
    ) {
        cardWidth = breakpoint - tempLeftNavWidth - tempDockWidth - pdLg - pdLg
    } else if(
        breakpoint>noDockwhenScreenIsSmallerThan &&
        breakpoint<=noLefNavwhenScreenIsSmallerThan
    ) {
        cardWidth = breakpoint - tempDockWidth - pdLg - pdLg
    } else if(
        breakpoint<=noDockwhenScreenIsSmallerThan &&
        breakpoint<=noLefNavwhenScreenIsSmallerThan
    ) {
        cardWidth = breakpoint - pdSm - pdSm
    }
    
    
    return cardWidth
 })

 //[982, 822, 592, 310]

return possibleCardWidthRange
}



export {calculateCardWidth};