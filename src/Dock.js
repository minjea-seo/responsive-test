import React from 'react';

function Dock(props) {
    return (
        <div style={{'width':`${(props.dockOpen)?250:0}px`}} className='dock'>
        </div>
    );
}

export default Dock;