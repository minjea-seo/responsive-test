import React from 'react';
import {findNextNumbers} from './findNextNumbers';
function Settings({
    breakpoints,
    screenWidth,
    possibleCardWidthRange,
    setBreakpoints,
    criteriaSizeArr,
    setCriteriaSizeArr,
    wholeRef,
    toggleSecondCardFlexible,
    setToggleSecondCardFlexible
}) {
    const findNumbers = findNextNumbers(screenWidth,[...breakpoints,screenWidth])
    return (
        <div className='settings p-4 bg-gray-100'>
            <div className=''>
            <h1 className='text-lg font-bold'>{`Screen width:${screenWidth}`}</h1>
            <h5 className='text-md'>{`In the range of:${findNumbers['nextHighest']}-${findNumbers['nextLowest']}`}</h5>
            <h2 className='text-lg font-bold'>{`Whole items width:${(wholeRef.current)?wholeRef.current.offsetWidth:null}`}</h2>
            </div>
            <div className='cardWidthAdjustment'>
            <h1 className='text-lg font-bold text-gray-500'>Cards</h1>
                <div className='flex flex-col'>
                {criteriaSizeArr.map((criteriaSize,index)=>{
                    return(
                        <input key={`cat+${index}`}className="mb-2" type="number" value={criteriaSize}
                        onChange={(e)=>{
                            const tempCriteriaSize = [...criteriaSizeArr]
                            tempCriteriaSize[index] = Number(e.target.value)
                            setCriteriaSizeArr([...tempCriteriaSize])
                        }}/>
                    )
                })}
                </div>
                <label htmlFor="toggleSecondCardFlexible">Responsive second card:</label>
                <input id="toggleSecondCardFlexible" className='bg-gray-800 py-1 px-2 text-white rounded-full mb-2' type="button" value={toggleSecondCardFlexible} onClick={()=>{setToggleSecondCardFlexible(!toggleSecondCardFlexible)}}/>
                <p className='text-gray-400'>Responsive card means extra width will be added based on existence of Dock and left nav. ex> 600 is base width and when there is no left nav 760 will be width of second card when there is no lef nav</p>
            </div>
            <div className='breakpointAdjustment'>
                {
                    breakpoints.map((item,index)=>{
                        return(
                            <div key={`dog+${index}`} className='pb-2'>
                                <h3>{`Breakpoint${index+1}: ${item}`}</h3>
                                 <div className='text-gray-600'>
                                    {(index!==breakpoints.length-1)?
                                    `Possible card range: ${possibleCardWidthRange[index]} -${possibleCardWidthRange[index+1]}`
                                    :
                                    `Possible card range: ${possibleCardWidthRange[index]} - 0`
                                    }
                                    </div>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <p>Only card size 750 & 600 have UI example, but not others</p>
            </div>
        </div>
    );
}

export default Settings;