import './App.css';
import Settings from './Settings';
import { useState, useEffect, useRef } from 'react';
import { calculateCardWidth } from './calculation'

function App() {
  const[displaySetting,setDisplaySetting] = useState(true)
  const[toggleSecondCardFlexible,setToggleSecondCardFlexible] = useState(false)
  //cardWidth
  const [possibleCardWidthRange, setPossibleCardWidthRange] = useState([]);


  //padding
  const pdLg =24;
  const pdSm =16;
 
  //screenWidth
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  //toggle dock and nav existence
  const [showLeftNav, setShowLeftNav] = useState(true)
  const [showDock, setShowDock] =  useState(true)

  //Components size
  const dockWidth = (showDock)?250:0
  const leftNavWidth = (showLeftNav)?160:0

  //card

  let criteriaSize = 750
  let criteriaSize2 = 600
  let [criteriaSizeArr, setCriteriaSizeArr] = useState([criteriaSize,criteriaSize2])
  
  
  let defaultCardsize = (showLeftNav||showDock)?(showLeftNav)?(showDock)?criteriaSize:criteriaSize+250:criteriaSize+160:criteriaSize+250+160;
  let defaultCardsize2 = (showLeftNav||showDock)?(showLeftNav)?(showDock)?criteriaSize2:criteriaSize2+250:criteriaSize2+160:criteriaSize2+250+160;
  const [defaultCardSizeArr, setDefaultCardSizeArr] = useState([defaultCardsize,defaultCardsize2])

  //breakpoints
  
  const defaultMDBreakPoint = leftNavWidth + defaultCardsize + pdLg +pdLg+ dockWidth
  const defaultSMBreakPoint = defaultCardsize + pdLg +pdLg+ dockWidth
  const defaultXSMBreakPoint = defaultCardsize + pdLg +pdLg
  const defaultMBBreakPoint = defaultCardsize2 + pdLg + pdLg
  const [breakpoints, setBreakpoints] = useState([
      defaultMDBreakPoint,
      defaultSMBreakPoint,
      defaultXSMBreakPoint,
      defaultMBBreakPoint
  ])

  //variables affect calculation
  let noDockwhenScreenIsSmallerThan = defaultCardSizeArr[0] + pdLg +pdLg+ dockWidth
  let noLefNavwhenScreenIsSmallerThan = leftNavWidth + defaultCardSizeArr[0] + pdLg +pdLg+ dockWidth
  let leftNavExist =(screenWidth>noLefNavwhenScreenIsSmallerThan)?true:false
  let dockOpened=(screenWidth>noDockwhenScreenIsSmallerThan)?true:false
  
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
   
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(()=>{
    const tempDefaultCardSizeArr = criteriaSizeArr.map((criteriaSize, index)=>{
      if(index === 0||toggleSecondCardFlexible){
        const tempCriteriaSize = (showLeftNav||showDock)?(showLeftNav)?(showDock)?criteriaSize:criteriaSize+250:criteriaSize+160:criteriaSize+250+160
        return tempCriteriaSize
      } else {
        return criteriaSize
      }
    })
    setDefaultCardSizeArr([...tempDefaultCardSizeArr])
  },[criteriaSizeArr, showLeftNav, showDock, toggleSecondCardFlexible])



 useEffect(()=>{
    const defaultMDBreakPoint = leftNavWidth + defaultCardSizeArr[0] + pdLg +pdLg+ dockWidth
    const defaultSMBreakPoint = defaultCardSizeArr[0] + pdLg +pdLg+ dockWidth
    const defaultXSMBreakPoint = defaultCardSizeArr[0] + pdLg +pdLg
    const defaultMBBreakPoint = defaultCardSizeArr[1] + pdLg + pdLg
    const tempBreakpoints = [defaultMDBreakPoint, defaultSMBreakPoint,  defaultXSMBreakPoint, defaultMBBreakPoint]
    setBreakpoints([...tempBreakpoints])
  },[defaultCardSizeArr])


  useEffect(() => {
    setPossibleCardWidthRange(calculateCardWidth(
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
    ))
  }, [breakpoints]);

  const wholeRef = useRef(null);

  return (
    <div className="App">
      <div>
        <header className="flex justify-between w-full p-2 p-4">
          <div className='logo'></div>
          <div className='flex justify-between gap-4 items-center'>
            <div onClick={()=>{
              setShowDock(true)
              setShowLeftNav(true)
            }}>{`Dock(O)/Left(O)`}</div>
            <div onClick={()=>{
              setShowDock(true)
              setShowLeftNav(false)
            }}>{`Dock(O)/Left(X)`}</div>
            <div onClick={()=>{
              setShowDock(false)
              setShowLeftNav(true)
            }}>{`Dock(X)/Left(O)`}</div>
            <div onClick={()=>{
              setShowDock(false)
              setShowLeftNav(false)
            }}>{`Dock(X)/Left(X)`}</div>
            <div
            onClick={()=>{
              setDisplaySetting(!displaySetting)
            }}
            >Settings</div>
          </div> 
        </header>
        <div className='divider'></div>
        {(displaySetting)?
          <Settings
          breakpoints={breakpoints}
          screenWidth={screenWidth}
          possibleCardWidthRange={possibleCardWidthRange}
          setBreakpoints={setBreakpoints}
          defaultCardsize={defaultCardsize}
          criteriaSizeArr={criteriaSizeArr}
          setCriteriaSizeArr={setCriteriaSizeArr}
          wholeRef={wholeRef}
          toggleSecondCardFlexible={toggleSecondCardFlexible}
          setToggleSecondCardFlexible={setToggleSecondCardFlexible}
          />
        :null}
      </div>
      <div
      className={`whole ${(screenWidth<breakpoints[breakpoints.length-1])?'w-screen':''}`}>
        <div ref= {wholeRef} className='flex'>
        <div style={{'width':`${(leftNavExist)?leftNavWidth:0}px`}} className='leftNav'>
        </div>
        <div
        className={`bodyContainer p-6 ${(screenWidth<breakpoints[breakpoints.length-1])?'flex justify-center px-4':''}`}>
          {(screenWidth>defaultCardSizeArr[0]+pdLg+pdLg)?
          <>
           <div
           style={{'width':`${defaultCardSizeArr[0]}px`}}
           className='bg-red-400 card'
         >
           <h2>{`Width:${defaultCardSizeArr[0]}(Card 1)`}</h2>
         </div>
         <div>
          <img src={`./img/research-reports-test-${defaultCardSizeArr[0]}-2.png`}
          style={{
            'width':`${defaultCardSizeArr[0]}px`,
            'padding-top':'24px'
          }} 
          alt="Research reports"/>
         </div>
         <div>
          <img src={`./img/research-reports-test-${defaultCardSizeArr[0]}.png`}
          style={{
            'width':`${defaultCardSizeArr[0]}px`,
            'padding-top':'24px'
          }} 
          alt="Research reports"/>
         </div>
         </>
          :(screenWidth>defaultCardSizeArr[1]+pdLg+pdLg)?
          <>
          <div className='card2 bg-blue-400 flex card'
          style={{'width':`${defaultCardSizeArr[1]}px`}}
          >
            <h3>{`Width:${defaultCardSizeArr[1]}(Card 2)`}</h3>
          </div>
          <div>
          <img src={`./img/research-reports-test-${defaultCardSizeArr[1]}-2.png`}
          style={{
            'width':`${defaultCardSizeArr[1]}px`,
            'padding-top':'24px'
          }} 
          alt="Research reports"/>
         </div>
          <div>
          <img src={`./img/research-reports-test-${defaultCardSizeArr[1]}.png`}
          style={{
            'width':`${defaultCardSizeArr[1]}px`,
            'padding-top':'24px'
          }} 
          alt="Research reports"/>
         </div>
          </>
          :
          <div className=' bg-green-400 card'
          style={{
            'width':`${screenWidth-pdSm-pdSm}px`,
            'padding-top':'24px'
          }} 
          >
            <h3>{`Width:${screenWidth-pdSm-pdSm}(Card 3)`}</h3>
          </div>
          }
         
        </div>
        <div style={{'width':`${(dockOpened)?dockWidth:0}px`}} className='dock'>
     
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
