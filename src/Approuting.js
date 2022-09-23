import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Fetch from "./components/Fetch";
// import Sandeep from "./components/Capital";
// import Divisior from "./components/Divisor";
// import Form from "./components/Form";
// import Quadratic from "./components/Quadratic";
import Sorting from "./components/Sorting";
// import Test2 from "./components/Test2";
// import Test3 from "./components/Test3";
// import Test4 from "./components/Test4";
// import Test5 from "./components/Test5";
// import Test6 from "./components/Test6";
// import Test7 from "./components/Test7";
// import Uniqewords from "./components/Uniqewords";
// import Test7 from "./components/Test7";
const Approuting =() => {
    return(
        <BrowserRouter>
        <Routes>
           {/* <Route path="/" element={<Form/>}/>
            <Route path="/Test2" element={<Test2/>}/>
            <Route path="/Test3" element={<Test3/>}/>
            <Route path="/Test4" element={<Test4/>}/>
            <Route path="/Test5" element={<Test5/>}/>
             <Route path="/Test6" element={<Test6/>}/> 
            <Route path="/Test7" element={<Test7/>}/>
            <Route path="/Uwe" element={<Uniqewords/>}/>
            <Route path="/Sandeep" element={<Sandeep/>}/>
            <Route path="/Divisior" element={<Divisior/>}/>
            <Route path="/Qr" element={<Quadratic/>}/> */}
            <Route path="/Sorting" element={<Sorting/>}/>
            <Route path="/Fetch" element={<Fetch/>}/>




        </Routes>
        </BrowserRouter>
    )
}
export default Approuting;