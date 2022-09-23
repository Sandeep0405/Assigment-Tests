import React, { useState } from "react";

const Quadratic = () => {
  const [show, setShow] = useState("");
  

  const handleNumber = (e) => {
    setShow(e.target.value);
  };

  const handleSubmit = () => {
    // var num = number.toString();
    // let sum = 0;
    // while (num > 0) {
    //   let res = num % 10;
    //   num = num / 10;
    //   num = parseInt(num);
    //   let result = res * res * res * res;
    //   // console.log(res);
    //   sum = sum + result;
    // }
    // console.log(sum);
    // setRes(sum);
    var number = show.toString("")
      var sum = 0;
      while (number > 0) {
        let val = number % 10;
        sum = sum + Math.pow(val, 4);
        number = parseInt(number / 10);
        setShow(sum);
      }

  };
  return (
    <>
      <input type="text" placeholder="Enter Number" value={show} onChange={handleNumber} />
      <button onClick={handleSubmit}>click</button>
      <p>Quadratic Number :-{show}</p>
    </>
  );
};
export default Quadratic;