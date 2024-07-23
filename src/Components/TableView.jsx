import axios from "axios";
import React, { useEffect, useState } from "react";

export default function TableView(){
    const [data,setData]=useState([]);
    // const [error,setError]=useState(null);

    useEffect(()=>{

        axios.get("https://jsonplaceholder.typicode.com/users")
              .then(response =>{
            setData(response.data);
        })
        .catch((error)=>{
            console.log("getting error while fetching data",error);
        })
    },[])
    return(
        <div>
        <h1>data shown</h1>
        <ul>
            {data.map(data=>(
                <li key={data.id}>{data.name}</li>
            ))}
        </ul>

        </div>
    )
}