import React, { useState } from "react";

function AlterName(){
    const[changeName,setChangeName]=useState("surya");

    const handleClick=()=>{
        setChangeName(changeName==="surya"? "rj":"surya");
    }

    return(
        <>
         <button style={{color:changeName==='surya'?'green':'red'}} onClick={handleClick}> {changeName} </button>


        </>
    )
}

export default AlterName;