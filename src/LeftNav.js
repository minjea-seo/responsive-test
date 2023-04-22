import React from 'react';

function LeftNav(props) {
    return (
        <div style={{'width':`${(props.leftNavOpen)?160:0}px`}} className='leftNav'></div>
    );
}

export default LeftNav;