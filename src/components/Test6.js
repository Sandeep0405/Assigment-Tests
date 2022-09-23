import React, { useState } from "react";
import "./Test6.css";

const Test6=()=> {
  const [state, setstate] = useState({
    value:"",
    string: false,
    number: false,
  })
  function data(e) {
    const res = e.target.value
    setstate({...state, value: res})
    e.target.value=""
  }
  function submit() {
  
    if ((state.value).match(/[0-9]*\.?[0-9]*/)) {
      setstate({...state, number:true})
    }
    else {
      setstate({...state, string:true,number:false})
    }

  }
  return (
    <div className="form">
      <label>Input</label>
      <input onBlur={data}/>
      <button onClick={submit}>submit</button>
      {
      (state.value)&&
       ( (state.number)?<div>Enter Text is a number which is: {state.value}</div> :
        <div>Enter Text is a string which is {state.value}</div>)
      }
    </div>
  )
}
export default  Test6;
