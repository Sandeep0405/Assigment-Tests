import React, { useState } from "react";

const Uniqewords=()=>{

    const [state, setState]=useState();

    const handleInputChange=(e)=>{
        setState(e.target.value);
        console.log(e.target.value);
    }
     
    const displaywords=()=>{
        
      let count=0;
      let a=state.split(" ")
      for( let i=0;i<a.length;i++)
      {
        count=0;
        for( let j=0;j<a.length;j++)
        {
          if(a[i]==a[j])
          {
            count++;
          }
        }
        if(count==1)
        {
          console.log(a[i])
          setState(a[i])
        }
      }
    }

    return(
        <>
        <div>
            <h3>Display Uniquewords in string</h3>
            <input type="text" onChange={handleInputChange} value={state}/>
            <button onClick={displaywords}>Submit</button>
            <h4>{state}</h4>
        </div>
        </>

    )
};
export default Uniqewords;