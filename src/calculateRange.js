
function calculateRange(breakpoints) {
    const tempRange = breakpoints.map((breakpoint,index)=>{
        if(index === 0) {
            return [9999,breakpoint]
        } else if (index === breakpoints.length-1) {
            return [breakpoints[index-1],0]
        } else {
            return [breakpoints[index-1],breakpoints[index]]
        }
    })
    return tempRange
}

export default calculateRange;