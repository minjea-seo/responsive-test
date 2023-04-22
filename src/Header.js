import React from 'react';

function Header(props) {
    return (
        <header>
            {(props.screenWidth>=1060)?
            <>
                <div className='p-2 flex flex-row justify-between items-center'>
                    <div className='logo font-semibold'>BP TEST V2</div>
                    <div className='text-gray-500'>{`Screen Width = ${props.screenWidth} / Largest Container Wdith = ${(props.wholeWidth)?props.wholeWidth:'Resize the screen to get the width'}`}</div>
                    <div className='flex gap-2'>
                        <button
                        className={`bg-gray-200 p-2 rounded-md
                        ${(props.currentLayout===0?'bg-purple-200':'bg-gray-200')}`}
                        onClick={()=>{props.setCurrentLayout(0)}}
                        >{`LEFT NAV(O) / DOCK (O)`}</button>
                        <button className={`bg-gray-200 p-2 rounded-md
                        ${(props.currentLayout===1?'bg-purple-200':'bg-gray-200')}`}
                        onClick={()=>{props.setCurrentLayout(1)}}
                        >{`LEFT NAV(X) / DOCK (O)`}</button>
                        {/* <button className='bg-gray-700 text-white p-2 rounded-md ml-4'>{`Settings`}</button> */}
                    </div>
                </div>
                <div className='bg-gray-100' style={{'height':'2px'}}></div>
            </>
            :
            <>
            <div className='p-2 flex flex-row justify-between items-center'>
                    
                    <div className='text-gray-500'>{`SW = ${props.screenWidth} / LCW = ${(props.wholeWidth)?props.wholeWidth:'Resize the screen to get width'}`}</div>
                    <div className='flex gap-2'>
                        <button
                        className={`bg-gray-200 p-2 rounded-md
                        ${(props.currentLayout===0?'bg-purple-200':'bg-gray-200')}`}
                        onClick={()=>{props.setCurrentLayout(0)}}
                        >{`OO`}</button>
                        <button className={`bg-gray-200 p-2 rounded-md
                        ${(props.currentLayout===1?'bg-purple-200':'bg-gray-200')}`}
                        onClick={()=>{props.setCurrentLayout(1)}}
                        >{`XO`}</button>
                        {/* <button className='bg-gray-700 text-white p-2 rounded-md'>{`St`}</button> */}
                    </div>
                </div>
                <div className='bg-gray-100' style={{'height':'2px'}}></div>
            </>
            }
        </header>
    );
}

export default Header;