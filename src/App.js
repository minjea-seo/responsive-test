import './App.css';
import Settings from './Settings';
import Header from './Header';
import Content from './Content';
import { useState, useEffect, useRef } from 'react';
import calculateRange from './calculateRange'
import caculateCardSize from './caculateCardSize';
import Content2 from './Content2';
function App() {

  //0-qsp, 1-home
  const [currentLayout , setCurrentLayout] = useState(0)
  const [layout, setLayout] = useState([0,1])
  //decide to not change the original breakpoints
  const [breakpoints, setBreakPoints] = useState([1440,1280,1050,768,0])
  //Populate the range based on the breakpoints setting
  const [range, setRange] = useState(calculateRange(breakpoints))
  //Open or Close by size and layout
  const [leftNavOpen, setLeftNavOpen] = useState(true)
  //Open or Close by size and layout
  const [dockOpen, setDockOpen] = useState(true)
  //padding size
  const [padding, setPadding] = useState([24,16])
  //Card base size
  const [cardBaseSize, setCardBaseSize] = useState([976,736])
  //calculate card size
  const [cardsWidth, setCards] = useState(caculateCardSize(layout, cardBaseSize,padding))

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
   
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //Ref Container include everything
  const [wholeSize, setWholeSize] = useState(null)
  return (
    <div className="App">
      <Header
        wholeWidth={(wholeSize)?wholeSize:'Resize the screen'}
        currentLayout={currentLayout}
        setCurrentLayout={setCurrentLayout}
        screenWidth={screenWidth}
      />
      <div className='meow'>
      {(currentLayout===0?
         <Content
         screenWidth={screenWidth}
         currentLayout={currentLayout}
         range={range}
         cardsWidthSet={cardsWidth}
         leftNavOpen={leftNavOpen}
         dockOpen={dockOpen}
         setWholeSize={setWholeSize}
         />
      :
      <Content2
        screenWidth={screenWidth}
         currentLayout={currentLayout}
         range={range}
         cardsWidthSet={cardsWidth}
         leftNavOpen={leftNavOpen}
         dockOpen={dockOpen}
         setWholeSize={setWholeSize}
      />
      )}
      </div>
    </div>
  );
}

export default App;
