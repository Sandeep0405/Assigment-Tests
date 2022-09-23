import React, { useState } from "react";
import "./Test5.css";
const Test5 =()=>{
    const[show,setShow]=useState("")
    const handleChange=(e)=>{
        console.log(e.target.value);
        setShow(e.target.value.trim()) 
    }
    return(
        <div className="sandeep">
            <h1>Password</h1>
          <input type="password"   placeholder="Password"  value={show}  onChange={handleChange}/>
          <h1>You entered Password is:{show}</h1>
        </div>

    )
};

export default Test5;