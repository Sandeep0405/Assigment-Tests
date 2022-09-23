import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const Fetch = () => {
  const [state, setState] = useState({ data: [] });

  useEffect(() => {
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
  }, []);

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
          {state.data.map((user, page) => {
            return (
              <tr key={page}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>
                  <img src={user.avatar} alt="avatar" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
export default Fetch;
