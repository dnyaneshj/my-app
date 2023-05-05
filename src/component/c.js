import React, { useContext } from 'react';
import MContext from './context';
const C =()=> {
   let data = useContext(MContext);
    return <>
    <div className='bg-danger'>
    <h5>C Component</h5>
    <table className='table table-bordered mt-5'>
        <thead>
        <tr><th>Iname</th><th>Iid</th><th>area</th><th>counrty</th></tr>
        </thead>
        <tbody>
        <tr>
        <td>{data.Iname}</td><td>{data.Iid}</td><td>{data.area}</td><td>{data.country}</td>
        </tr>
        </tbody>
    </table>
    </div>
    </>
    
}
export default C;