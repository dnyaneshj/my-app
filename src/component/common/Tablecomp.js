import React from "react";
const Table = (props) =>{
   const {header,TableData,cols} = props;
    return (
        <>
        <table>
            <thead>
                <tr>
                  {
                    header.map( (value,index) =>{
                      return <th key={index}>{value}</th>
                    })
                  }  
                </tr>
            </thead>
            <tbody>
                    {
                        TableData.map((obj,index) =>{
                        return <tr key={index}>
                                {
                                    cols.map((col,ind) =>{
                                        return <td key={ind}>{obj[col]}</td>
                                    })
                                }
                        </tr>
                        })
                    }
              
            </tbody>
        </table>
        </>
    )
}
export default Table