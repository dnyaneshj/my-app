import React, { useState, useEfect } from "react";

const fetchAPI = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((response) => setData(response))
    }, []);
    console.log("output is" + data);
    return (<>
        <ul>
            {
                data.map((items, index) => (
                    <div key={index}>
                        <li className="my">{items.title} {items.body}</li>
                    </div>
                ))
            }
        </ul>
    </>
    )
}
export default fetchAPI