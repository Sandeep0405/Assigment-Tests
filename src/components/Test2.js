
import React, { useState } from "react";

const Test2 = () => {
  const [show, setShow] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const handlechange = (e) => {
    console.log(e.target.value);
    setShow({ ...show, fname: e.target.value });
  };
  const handlechange1 = (e) => {
    console.log(e.target.value);
    setShow({ ...show, lname: e.target.value });
  };
  const handlechange2 = (e) => {
    console.log(e.target.value);
    setShow({ ...show, email: e.target.value });
  };
  const handlechange3 = (e) => {
    console.log(e.target.value);
    setShow({ ...show, password: e.target.value });
  };
  const handlechange4 = (e) => {
    console.log(e.target.value);
    setShow({ ...show, confirmpassword: e.target.value });
  };
  

  return (
    <form className="container">
      <div>
        <div>
     <label className="fn">First Name:</label>
     </div>
     <div>
     <input
          type="text"
          name="Firstname"
          placeholder="Enter Firstname"
          className="fname"
          onChange={handlechange}
          
        />
        </div>
      </div>
      <div>
        <label className="ln">Last Name</label>
        </div>
        <input
          type="text"
          name="Lastname"
          placeholder="Enter Lastname"
          className="lname"
          disabled={!show.fname}
          onChange={handlechange1}
        />
         {/* <img src="user.svg" alt="Logo" className="user" /> */}
        <div>
      </div>
      <div>
        <div>
        <label className="em">Email</label>
        </div>
        <div>
        
        <input
          type="text"
          name="Email"
          placeholder="Enter Email"
          className="email"
          disabled={!show.lname}
          onChange={handlechange2}
        />
        </div>
      </div>
      <div>
        <label className="pass">Password</label>
        </div>
        <div>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="password"
          disabled={!show.email}
          onChange={handlechange3}
        />
      </div>
      <div>
        <label className="cn">Confirm Password</label>
        </div>
        <div>
        <input
          type="Password"
          name="password"
          placeholder="Enter Confirmpassword"
          className="confirm"
          disabled={!show.password}
          onChange={handlechange4}
        />
        {(show.password && show.confirmpassword)?(show.password===show.confirmpassword)?
        <p>✔️</p>:
    <p>❌</p>:""}
  
      </div>
    </form>
  );
};
export default Test2;
