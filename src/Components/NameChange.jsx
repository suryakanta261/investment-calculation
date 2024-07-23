import React, { useState } from 'react';

function NameCange(){
const [name,setName]=useState(false);

const handleChange=()=>{
  setName(!name);
}
  return(
    <>
{name ? (<div onClick={handleChange}>hiiiii</div>) : (<h1 onClick={handleChange}>hello</h1>)}
    </>
  )
}
export default NameCange;