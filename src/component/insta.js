import React, { useEffect, useState } from "react";
import {FidgetSpinner} from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Insta = () => {
    const [data,setData] = useState([]);
    const [loader,setLoader] = useState(false);

    // const notify = () => toast.success('🦄 Data is succefully loaded!', {
    //     position: "top-right",
    //     autoClose: 100,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "colored",
    //     });

    useEffect(() => {
    async function loadData(){
    setLoader(true);
   // const res = await fetch('https://dummyjson.com/products/10');
   // const res = await fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies');
    const res = await fetch ('https://hub.dummyapis.com/employee?noofRecords=1000&idStarts=1');
    const finalResult = await res.json();
    setData(finalResult);
    //notify();
    toast.success('Data is succefully loaded!');
    setLoader(false);
   
    } 
    loadData();
    },[])
    console.log('the data is = ', data);
    return (
       <>
       <ToastContainer/>
       <p>HI THis is Inta Component</p>
       <ul style={{height:'auto',color:'#ffffff'}}>
        {loader ?  
       <FidgetSpinner
       visible={true}
       height="80"
       width="80"
       ariaLabel="dna-loading"
       wrapperStyle={{}}
       wrapperClass="dna-wrapper"
       ballColors={['#ff0000', '#00ff00', '#0000ff']}
       backgroundColor="#F4442E"
     />: data.map((items,index) =>{
             return (<li key={index}> {items.id} {items.firstName} {items.lastName} {items.email}</li>)
            })
        }
       {/* {
       Object.entries(data).map(([key,value]) =>{
         return  <li>{key},{value}</li>
        })
       } */}
       </ul>
        </>
)
}
export default Insta;