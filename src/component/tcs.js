import React from "react";
import data from '../../src/component/common/data1.json'
const TCS = () => {
    
  return (
    <>
    <h2>nested example</h2>
    <ul>
    {
        data.map((item,index) => {
        return(<>
        <li key={index}>{`id : ${item.id} email: ${item.email} username: ${item.username} 
        address lattitude: ${item.address.geo.lat}  address lang: ${item.address.geo.lng}`}
        </li>
        </>)
    })
    }
    </ul>
    </>
  )
}
export default TCS;