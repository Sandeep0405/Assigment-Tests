import React,{useState} from "react";
const Test4= () => {

    const [state, setState] = useState(
        {
            data: '',
            list: [],
        }
    )
    const { list } = state;

    const handlechange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const submitFn = (e) => {
        e.preventDefault();
        list.push(state.data)
        console.log("list", list)
        setState({ ...state, list: list })
        setState({ ...state, data: '' })

    }
    return (
        <div className="sandeep">
            <input type="text" onChange={handlechange} name="data" value={state.data}></input>
            <button onClick={submitFn}>Click here</button>
            <table class="table table-dark">
                <thead class="thead-light">
                    {/* <p>Table</p> */}
                    <th>id: name</th>
                    {/* <th>name</th> */}
                </thead>
                <body>
                    {
                        list.map((value, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{value}</td>
                                </tr>
                            );
                        }

                        )

                    }

                </body>
            </table>
        </div>
    )
}

export default Test4;