import React, { useState } from 'react';

function ChangeColor(){

    const [color,setColor]=useState('red');
    const handleClick=()=>{
        setColor(prevColor=>(prevColor==='red' ? 'green': 'red'));
    }
    return(
        <h1 style={{color:color}} onClick={handleClick}>click to change</h1>
    )
}
export default ChangeColor;