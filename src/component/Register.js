import React, { useEffect, useState } from "react";
import axios from "axios";

const Registers = () => {
  //eve.holt@reqres.in
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    lastName: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    setFormData({ ...formData, [event.target.name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payLoad = {
      id: formData.id,
      firstName: formData.name,
      lastName: formData.lastName,
      emailId: formData.email,
    };

    axios
      .post("http://13.53.33.190:8080/web-services/addDetails", payLoad)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

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
