import React, { useState } from "react";
const AddF = () => {
    const countryList = ['select country', 'india', 'pak', 'eng'];

    const initialUserList = [{
        fname: '',
        lname: '',
        country: ''
    }];

    const [userList, setUserList] = useState(initialUserList);
    
    const handleAddMore = () => {
        setUserList([...userList, { fname: '', lname: '', country: '' }])
    }
    const handeleDelete = (index) => {
       // if(userList.length == 1) return;
        const list = [...userList];
        list.splice(index, 1);
        setUserList(list);
    }
    const handleChange = (e, index) => {
        console.log(e.target)
        const { name, value } = e.target;
        const list = [...userList];
        list[index][name] = value;
        setUserList(list)
    }
    const handleSubmit = () =>{
        let payLoad = {
            data :userList
        }
        console.log(payLoad);
    }
   
    return <>
        <div className="container px-5">
            <h5>Add More Friends</h5>
            {
                userList?.map((data, index) => (
                    <div className="row" key={index}>
                        <div className="col-2">
                            <label forname="fname" className="d-block">first Name</label>
                            <input type="text"
                                onChange={e => handleChange(e, index)} placeholder="enter first name"
                                value={data.fname} id="fname" name="fname" className="form-control" />
                        </div>
                        <div className="col-2">
                            <label forname="lname" className="d-block">Last Name</label>
                            <input type="text"
                                onChange={e => handleChange(e, index)} placeholder="enter last name"
                                name="lname" id="lname" value={data.lname} className="form-control" />
                        </div>
                        <div className="col-2">
                            <label forname="country" className="d-block">Country</label>

                            <select className="form-select" value={data.country} name="country"
                                onChange={e => handleChange(e, index)}>
                                {countryList.map((cname) => {
                                    return (
                                        <option value={cname} key={cname}>
                                            {cname}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="col-2">
                            {index === 0 && <> <label forname="delete" className="d-block">Action</label></>}
                            {index !== 0 && <> <label forname="delete" className="d-block v-hidden">Action</label></>}
                        {
                            userList.length > 1 && <button className="btn btn-danger btn-sm" onClick={() => handeleDelete(index)}>delete</button>
                        }
                        </div>
                    </div>
                ))}

            <div className="row mt-4">
                <div className="col-4">
                    <button className="btn btn-primary btn-sm me-2" onClick={handleAddMore}>Add More</button>
                    <button className="btn btn-success btn-sm" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    </>
}
export default AddF;