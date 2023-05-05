import React, { useState } from 'react';
const FormsComponent = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [date,setDate] = useState('');
    const [message,setMessage] = useState('');

    const nameHandles = (event) => {
      setName(event.target.value);
    }
    const emailHandles = (event) => {
       setEmail(event.target.value);
    }
     const dateHandles = (event) => {
        setDate(event.target.value);
     }

     const messageHandles = (event) => {
        setMessage(event.target.value);
     }

    const submitHandler = (event) => {
        event.preventDefault();
        const formData = {
            name: name,
            email: email,
            date: date,
            message: message
        }
        console.log(formData);
    }

    return(
       <div className='row'>
        <div className='col-12'>
         <form onSubmit={submitHandler}>
            <div className='form-group'>
                <label htmlFor='name'>Name</label>  
                <input type='text' className='form-control' id='name' value={name} onChange={nameHandles}/> 
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email</label>    
                <input type='email' className='form-control' id='email' value={email} onChange={emailHandles}/>
            </div>
            <div className='form-group'>
                <label htmlFor='date'>Date</label>    
                <input type='date' className='form-control' id='date' value={date} onChange={dateHandles}/>
            </div>
            <div className='form-group'>
                <label htmlFor='message'>Message</label>
                <textarea className='form-control' id='message' value={message} onChange={messageHandles}></textarea>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </div>
         </form>
        </div>  
    </div>
    )
}
export default FormsComponent













































// import React, { useState } from "react";

// const FormsComponent = () => {
//     const [title,  setTitle] = useState('');
//     const [amount, setAmount] = useState('');
//     const [dates,  setDates] = useState('');

//     const titleHandler = (event) =>{
//         setTitle(event.target.value);
//     }
    
//     const amountHandler =(event)=>{
//         setAmount(event.target.value);
//     }
//     const dateHandler =(event)=>{
//         setDates(event.target.value);
//     }

//     const submitForm = (event) =>{
//         event.preventDefault();
//         const result = {
//             mytitle : title,
//             amounts: amount,
//             datevalue : new Date(dates)
//         }
//         console.log(result);
//         setTitle('');
//         setAmount('');
//         setDates('');    
//     }

//     return(
//         <div className="container">
//             <h2>Reat htmlForms</h2>
//             <form onSubmit={submitForm}>
//                 <div className="row">
//                 <div className="col-12">
//                     <label className="me-2" htmlFor="title">title</label>
//                     <input className="form-control input-md " type="text" name="title" value={title} id="title" onChange={titleHandler}/>
//                     <label className="me-2" htmlFor="amt">Amount</label>
//                     <input  className="form-control input-md "  type="number" id="amt" name="title" value={amount} onChange={amountHandler}/>
//                     <label className="me-2"  htmlFor="date1">title</label>
//                     <input  className="form-control input-md "  type="date" name="title" id="date1" value={dates} onChange={dateHandler}/><br/>
//                     <button type="submit">submit</button>
//                 </div>

//                 </div>
//             </form>
//         </div>
//     )
// };
// export default FormsComponent;