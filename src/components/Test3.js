import React, { useState } from 'react';

const Test3 = () => {

    const [color, setColor] = useState(" ");
    const [colors, setColors] = useState(" ");

    const updateColor = (e) => {
        setColor('');
    }
    const changeName = () => {
        setColor('Red');
    }
    const changeName1 = () => {
        setColors('black');
    }
    const changeName2 = () => {
        setColors('yellow');
    }
    const updateColor1 = (e) => {
        setColors('');
    }
    const updateColor2 = (e) => {
        setColors('');
    }





    return (
        <form>
            <div>
            <label for='field'>FirstName</label>
            </div>
            <div>
            <input type='text' onMouseOver={changeName} onMouseLeave={updateColor} style={{ background: color }} placeholder="First Name"></input>
            </div>
            <div>
            <label for='field'>LastName</label>
            </div>
            <input type='text' onMouseOver={changeName1} onMouseLeave={updateColor1} style={{ background: colors }} placeholder="Last Name"></input>
            <div>
            <button onMouseOver={changeName2} onMouseLeave={updateColor2} style={{ background: colors }} >submit</button>
            </div>
            
        </form>

    );
};

export default Test3;