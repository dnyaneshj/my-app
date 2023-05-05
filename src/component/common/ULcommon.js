import React,{useState,UseEffect} from 'react';
const handleChange =(e)=>{
   const res = e.target.value;
   console.log(res)
}
const Listbox = (props)=>{
    const data = props.p;
    return <>
     <ol>
        {
            data.map((items,index) =>{
                return <li key={index}>{items}</li>
            })
        }
        </ol> 
    </>
}

const DDL = ({data}) =>{
//const DDL = (props) =>{ //either u get props and destrucure it as {data} or you can destrure it ({props})
//as a argument in function both are valid

//const {data} = props;
     return <>
     <select className='form-control mb-2  mt-2' onChange={(e) => handleChange(e)}>
        {
            data.map((val,index) =>{
            return <option key={index}>{val}</option>
            })
        }
     </select>
     </>
}


export {Listbox,DDL}
//export default Listbox