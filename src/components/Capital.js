
import React, { useState } from "react";

const Sandeep= () => {
  const [state, setstate] = useState("");
  const [caps, setCaps] = useState("");
  const [lower, setLower] = useState("");
  const [upper, setUpper] = useState("");
  const [small, setSmall] = useState("");
  const [space, setSpace] = useState("");
  const [number, setNumber] = useState("");
  const [splChar, setSplChar] = useState("");
  const handleInput = (e) => {
    setstate(e.target.value);
  };
  const CapSmallVowell = () => {
    //  setstate('')
    let str = state.toUpperCase();
    let vowels = 0;
    let char1 = "";
    for (let i = 0; i < str.length; i++) {
      var ch = str.charAt(i);
      if (ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U") {
        vowels += 1;
        char1 += ch;
      }
    }

    //consonants.
    let str1 = state.toLowerCase();
    let consonants = 0;
    let res = "";
    for (let i = 0; i < str.length; i++) {
      var ch = str1.charAt(i);
      if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
      } else if (ch >= "a" && ch <= "z") {
        consonants += 1;
        res += ch;
      }
    }

    //caps.

    let caps = 0;
    let res1 = "";
    for (let i = 0; i < state.length; i++) {
      var ch = state.charAt(i);
      if (ch >= "A" && ch <= "Z") {
        caps += 1;
        res1 += ch;
      }
    }

    // small letters.

    let small = 0;
    let res2 = "";
    for (let i = 0; i < state.length; i++) {
      var ch = state.charAt(i);
      if (ch >= "a" && ch <= "z") {
        small += 1;
        res2 += ch;
      }
    }

    // spaces.

    let spaces = 0;
    let res3 = "";
    for (let i = 0; i < state.length; i++) {
      var ch = state.charAt(i);
      if (ch == " ") {
        spaces += 1;
        res3 += ch;
      }
    }

    // numbers.
    let digits = 0;
    let res4 = "";
    for (let i = 0; i < state.length; i++) {
      var ch = state.charAt(i);
      if (ch >= "0" && ch <= "9") {
        digits += 1;
        res4 += ch;
      }
    }
    // splchars.
    let splchars = 0;
    let res5 = "";
    for (let i = 0; i < state.length; i++) {
      var ch = state.charAt(i);
      if (
        ch == "*" ||
        ch == "!" ||
        ch == "#" ||
        ch == "&" ||
        ch == "@" ||
        ch == "$" ||
        ch == "%" ||
        ch == "^" 
      ) {
        splchars += 1;
        res5 += ch;
      }
    }
    setCaps(`Capital letters are : ${caps} (${res1})`);
    setSmall(`Small letters : ${small} (${res2})`);
    setLower(`Consonants are : ${consonants} (${res})`);
    setUpper(`Vowels are : ${vowels} (${char1})`);
    setNumber(`Numbers :${digits} (${res4})`);
    setSplChar(`Spl Characters are: ${splchars} (${res5})`);
    setSpace(`White Spaces :${spaces} (${res3})`);
    setstate("");
  };

  return (
    <>
    <div>
      <h2>{caps}</h2>
      <h2>{lower}</h2>
      <h2>{upper}</h2>
      <h2>{small}</h2>
      <h2>{space}</h2>
      <h2>{number}</h2>
      <h2>{splChar}</h2>
      </div>
      <input type="text" value={state} onChange={handleInput}/>
      <button onClick={CapSmallVowell}>click</button>
    </>
  );
};

export default Sandeep;

