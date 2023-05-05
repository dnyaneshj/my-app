import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Players = () =>{

  const navigate = useNavigate();

  const player = [
    {pname: 'sachin',prun: '10000'},
    {pname: 'virat',prun: '40000'},
    {pname: 'irfan',prun: '90000'}
  ];

  const [ndata,setandata] = useState({});

  const handleGetRow =(obj) =>{
         setandata(obj);
  }

  return(
    <>
     <button onClick={() => navigate(-1)}>Go Back To TODO App</button>
    <table className="table table-bordered my-4"> 
        <thead>
            <tr><th>name</th><th>runs</th><th>action</th></tr>
        </thead>
        <tbody>
            {player.map((obj,index)=>{
                const {pname,prun} = obj;
              return  <tr key={index}>
                    <td>{pname}</td>
                    <td>{prun}</td>
                    <td><button onClick={()=> handleGetRow(obj)}>Save</button></td>
                </tr>
            })}
        </tbody>
    </table>
     <table className="table table-bordered my-4"> 
        <thead >
            <tr><th>name</th><th>runs</th></tr>
        </thead>
      <tbody>
      {Object.keys(ndata).map((i, n) => {
           return <tr key={n} className="bg-primary">
           <td>{i}</td><td>{ndata[i]}</td>
       </tr>
        })
      }
      </tbody>
      </table>
    </>
  )
}
export default Players