import React, { useState } from "react";
import "./Form.css";
const Form = () => {
  const [signup, setSignup] = useState('');
  const [show,setShow]= useState(true);
  onchange= (e) =>{
    const re = /^[0-9\b]+$/;
    if (e.target.value===''|| re.test(e.target.value)){
    }
    console.log(e.target.value);
  setSignup({ ...signup, number: e.target.value });
  };
  const submitfn = (e) => {
    e.preventDefault();
     setShow(signup.number*80)
    console.log("submit");
  };
  const clearfn = (e) => {
    e.preventDefault();
    setShow(false)
    setSignup('')
  };

  return (
    <div className="container">
      <lable>Amount($)</lable>
      {/* <input
        type="text"
        name="Amount($)"
        placeholder="Amount"
        onChange={onchange}
        pattern="[0-9]*"
        value={signup.number}
  /> */}
      <input
      onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }}
    />
      <p>Amount Rupees(₹):{show}</p>
      <div className="button">
        <button type="button" onClick={submitfn}>
          submit
        </button>
        <button type="button" onClick={clearfn}>
          clear
        </button>
      </div>
    </div>
  );
};
export default Form;
