import React, { useState } from "react";
const Addmore = () => {

    const initial_data = [{id:1,fname: '',lname: '',country:''}];

    const [userList, setUserList] = useState(initial_data);
    const countryList  = ['select country','india','pak','cjina'];
    const handeleAddMore =()=>{
        setUserList([...userList, {id:userList.length+1, fname:'', lname:'',country:''}])
    //    setUserList((previousState) => [
    //     ...previousState,
    //     { id: userList.length + 1, fname: '', lname: ''}
    //   ]);
    }
    const handleChange = (e,index)=>{
       //console.log(e.target)
       const {name,value} = e.target;
       const list = [...userList];
       list[index][name] = value;
       setUserList(list);
    }
   
    const handeleDelete =(index)=>{
        const list = [...userList]
        list.splice(index, 1)
        setUserList(list)
    }
    const handleSubmit = () =>{
       let payROLE = {
            data:userList
        }
        console.log(payROLE.data)
    }

  return(<>
  <div className="container px-5">
  <h5>Add more people</h5>
  {
    userList?.map((item,index)=> (
        <div className="row" key={index}>
    <div className="col-2">
        <label forname="fname" className="d-block" >first name</label>
        <input className="form-control"  type="text" id="fname" name="fname" value={item.fname} 
        onChange={ e => handleChange(e,index)} placeholder="enter first name"/>
    </div>
    <div className="col-2">
        <label forname="lname" className="d-block" >Last name</label>
        <input className="form-control" type="text" id="lname" name="lname" value={item.lname} 
        onChange={ e => handleChange(e,index)} placeholder="enter last name"/>
    </div>
    <div className="col-2">
        <label forname="lname" className="d-block" >Last name</label>
        <select className="form-select" name='country' value={item.country} onChange={e=> handleChange(e,index)}>
        {countryList.map((country) => {
            return (
              <option value={country} key={country}>
                {country}
              </option>
            );
          })}
</select>
    </div>
    <div className="col-2">
        {index == 0 && <><label forname="fname" className="d-block">Action</label></>}
        {index !== 0 && <><label forname="fname" className="d-block v-hidden">Action</label></>}
        {userList.length > 1 && <button className="btn btn-danger btn-sm" onClick={() => handeleDelete(index)}>delete</button>} </div>
    </div>
    ))}

  <div className="row mt-4"> 
  <div className="col-4">
  <button className="btn btn-info btn-md me-2" onClick={handeleAddMore}>Add More</button>
  <button className="btn btn-success btn-md" onClick={handleSubmit}>Submit</button>
  </div>
  </div>
  </div>
  </>)
}
export default Addmore;