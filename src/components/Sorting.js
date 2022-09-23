import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const Sorting = () => {
  const [state, setState] = useState({ data: [] });

  useEffect(() => {
    // handeleaxios();
    // handlegetUsers();
    // handlefetch();
    handlefetchasy();

  }, []);

  const handeleaxios = () => {
    //axios promises
    axios
      .get("https://reqres.in/api/users?page=1")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setState(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
 //axios async await
  const handlegetUsers = async () => {
    let response = await axios.get("https://reqres.in/api/users?page=2");
    setState(response.data);
  };
// Fetch promises
 const handlefetch = ()=>{
  fetch("https://reqres.in/api/users?page=2")
    .then((res) => res.json())
    .then(
      (result) => {
        setState(result);
        console.log(result.data);
      },
      (error) => {
        setState(error);
      }
    );
 }
 // Fetch async await
 const handlefetchasy = async  ()=>{
  const response= await fetch ("https://reqres.in/api/users?page=1")
  const data = await response.json ()
  setState(data);


 }

  return (
    <div>
      <Table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>email</th>
            <th>first_name</th>
            <th>last_name</th>
            <th>avatar</th>
          </tr>
        </thead>
        <tbody>
          {state.data.map((user, Sandeep) => {
            return (
              <tr key={Sandeep}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>

              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
export default Sorting;
