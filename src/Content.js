import React from 'react';
import LeftNav from './LeftNav';
import Dock from './Dock';
import Card from './Card'
function Content({cardsWidthSet, screenWidth, range, currentLayout,leftNavOpen, dockOpen}) {
    const cardsWidth = cardsWidthSet[currentLayout]
    const rangeHighBar = range.map(item=>item[0])
    const rangeLowBar = range.map(item=>item[1])

    const checkWhichRangeNow =(screenWidth,rangeHighBar) => {
        const reversedHighBar = rangeHighBar.slice().reverse()
        for (let i = 0; i < reversedHighBar.length; i++) {
            if (reversedHighBar[i] >= screenWidth) {
              return rangeHighBar.length-i-1;
            }
        }
    }
    switch (checkWhichRangeNow(screenWidth,rangeHighBar)) {
        case 0:
            return(
                <div className='flex justify-center'>
                    <LeftNav leftNavOpen={leftNavOpen}/>
                        <Card
                        layoutCase={0}
                        currentLayout={currentLayout}
                        cardWidth={cardsWidth[0]}/>
                    <Dock dockOpen={dockOpen}/>
                </div>
            ) 
        case 1:
            return(
                <div className='flex justify-center'>
                <LeftNav leftNavOpen={leftNavOpen}/>
                <Card
                    layoutCase={1}
                    currentLayout={currentLayout}
                    cardWidth={cardsWidth[1]}/>
                <Dock dockOpen={dockOpen}/>
                </div>
            ) 
        case 2:
            return(
                <div className='flex justify-center'>
                    <Card
                    layoutCase={2}
                    currentLayout={currentLayout}
                    cardWidth={cardsWidth[1]}/>
                    <Dock dockOpen={dockOpen}/>
                </div>
            ) 
        case 3:
            return(
                <div className='flex justify-center'>
                    <Card
                    layoutCase={3}
                    currentLayout={currentLayout}
                    cardWidth={cardsWidth[1]}/>
                </div>
            ) 
        case 4:
            return(
                <div className='flex justify-center'>
                    <Card
                    layoutCase={4}
                    currentLayout={currentLayout}
                    cardWidth={screenWidth-16-16}/>
                </div>
            ) 
        default:
            break;
      }
}

export default Content;