import React, { useState } from "react";

const Test7 = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  
  const handleSubmit = (e) => {
    setData([...data, { id: data.length, value: name }]);
    setName("");
  };

  return (
    <div className="backgroundTable">
      <input
        type="text"
        value={search}
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.filter(val=> {
        if(search===""){
            return val;
        }
        else if (
            val.value.toLowerCase().includes(search.toLowerCase())
            )
            {
                return val;
            }
          }).map((item) => (
            <tr>
              <td>{item.id + 1}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Test7;