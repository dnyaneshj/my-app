import React, { useState } from "react";
import Moview from "./movies";
import moviesdata from '../movies.json';
const Mapdata = () =>{
const players = ['sachin','virat','kohli'];
const [player,setPlayer] = useState();
const [counter,setCounter] = useState(0);
const [fname,setFname] = useState();
const [email,setEmail] = useState();
const [userList,setuserList] = useState([]);

const handleChange =(e) =>{
     let dataval = e.target.value;
     setPlayer(dataval);
} 

const addUser = ()=> {
   setuserList([...userList,{fname,email}]); 
   setFname("");
   setEmail("");
}
console.log(userList);

const deleteItems = (index) =>{
    console.log(index);
    const tempUserList = [...userList];
    tempUserList.splice(index,1);
    setuserList(tempUserList);
}

const updateState = (e) =>{
   let namedata = e.target.value;
   setFname(namedata);
}
const updateStateEmail =(e)=>{
   let emaildata = e.target.value;
   setEmail(emaildata);
}

const incrementCount = (n) =>{
   setCounter((prevState) => prevState + n);
}
const decrementCount = (n) =>{
   setCounter((prevState) => prevState - n);
}
 return(
    <div className="container">
    <div className="row">
      <div className="col-12 col-sm-12">
         <h4 className="">{counter}</h4>
         <button className="btn btn-success btn-sm me-2" onClick={() => incrementCount(10)}>Increment</button>
         <button className="btn btn-danger btn-sm"  onClick= {() => decrementCount(20)}>Decrement</button>
      </div>
    </div>

    <div className="row">
    <div className="col-12">
    <select className="form-select w-50 my-5" name="player" value={player} onChange={e => handleChange(e)}>
        { players.map((val,index) => {
           return (<option key={index} value={val}>{val}</option>)
        })}
    </select>
    </div>
    </div>

    <div className="row">
    {
      moviesdata.map((element,index) =>{
        return (<Moview title={element.Title} img={element.Poster} id={element.imdbID} year={element.Year} key={index}/>)
      })
    }
    </div>

    <div className="row mt-4">
    <h4>TO Do App with methode base state update approach</h4>
    <div className="col-6">
       <input type="text" name="fname" value={fname} placeholder="enter name"
       onChange={e => updateState(e)}/>

       <input type="text" name="email" value={email} className="mt-4 ms-2" placeholder="enter email"
       onChange={e => updateStateEmail(e)}/>

       <button className="btn" onClick={addUser}>ADD</button>
       </div>
       <div className="col-6">
       <h4>view list</h4>
       <div>
       {
         userList?.map((items,index) =>{
         return(<p key={index} className="mb-2"> 
         {items.fname} - {items.email}
         <span className="text-danger mx-4" onClick={() => deleteItems(index)}>Delete</span></p>)
         })
       }
       </div>
       </div>
    </div>
      </div>
 )
}
export default Mapdata