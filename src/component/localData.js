import React from "react";
import data from '../data.json';

console.log(data);
const localData = () => {
    return <>
        {
            <ul>{
                data?.map((item, index) => (
                    <li key={index}>{item.id}{item.title}{item.userId}{item.body}</li>
                ))}
            </ul>
        }
    </>
}
export default localData;