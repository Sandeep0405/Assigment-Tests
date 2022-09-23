import React, { useState } from "react";

const Divisior =()=>{
    const [ show,setShow]= useState('')

    const inputChange =(e)=>{
setShow(e.target.value);
    }

    const clickme =(i)=>{
        var number = show;
        for (i = 0; i <= number; i++) {
          if (number % i == 0) {
            setShow((number (i)));
          }
        }
    }
    return(
        <div>
        <input
          type="text"
          name="text" onChange={inputChange} value={show}/>
          <p>Divisior{show}</p>
   <button onClick={clickme}>submit</button>
   </div>
    );
}
export default Divisior ;