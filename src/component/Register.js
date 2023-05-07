import React, { useEffect, useState } from "react";
import axios from "axios";
const Registers = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    lastName: "",
  });

  const handleChange = (event) => {
    //const value = event.target.value;
    const { name, value } = event.target;
    //setFormData({ ...formData, [event.target.name]: value });
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payLoad = {
      id: formData.id,
      firstName: formData.name,
      lastName: formData.lastName,
      emailId: formData.email,
    };
    postDetails(payLoad);
  };

     //API Call with Axios and async await 
    const postDetails = async (payLoad) => {
      try {
        let result = await axios.post(
          "http://13.53.33.190:8080/web-services/addDetails",
          payLoad,
          {
            //headers: { ...getCommonHeaders() },
          }
        );
        if (result.status === 200) {
          console.log("HTTP POST REQUEST WAS SUCCESS" + result.data);
          return result.data;
        } else {
          console.log("Some error occured");
        }
      } catch (err) {
        console.log("error in catch block", err);
      }
    };


  //API Call with fetch and async await only with passing header and body

  // const postDetails = async (payLoad) => {
  //   const res = await fetch("http://13.53.33.190:8080/web-services/addDetails", {
  //     method: "POST",
  //     headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body:JSON.stringify(payLoad)
  //   });

  //   if (res.status === 200) {
  //     console.log("successfully posted");
  //   } else {
  //     console.log("Some error occured in post");
  //   }
  // };

  return (
    <>
      <div className='row'>
        <div className='col-12'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label className='' htmlFor='name'>
                name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='form-control form-control-sm'
              />
            </div>

            <div className='form-group'>
              <label className='' htmlFor='lastName'>
                lastName
              </label>
              <input
                type='text'
                id='lastName'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                className='form-control form-control-sm'
              />
            </div>

            <div className='form-group'>
              <label className='' htmlFor='name'>
                email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='form-control form-control-sm'
              />
            </div>

            <div className='form-group'>
              <label className='' htmlFor='id'>
                id
              </label>
              <input
                type='text'
                id='id'
                name='id'
                value={formData.id}
                onChange={handleChange}
                className='form-control form-control-sm'
              />
            </div>

            <div>
              <button type='submit'>post data</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Registers;
