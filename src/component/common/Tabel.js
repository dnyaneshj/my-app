import React from "react";
const Tables =  (props)=>{
    const {header,data,columns} = props;
    return <>
    <h1>Table</h1>
    <table>
        <thead>
            <tr>
              {
               header.map((items,ind) =>{
                 return <th key={ind}>{items}</th>
               })
              }
           </tr>
        </thead>
        <tbody>
            {
                data.map((obj,index) => {
                 return <tr key={index}>
                        {
                            columns.map((col,ind) =>{
                               return <td key={ind}>{obj[col]}</td>
                            })
                        }
                  </tr>
                })
            }
        </tbody>
    </table>
    </>

}
export default Tables;