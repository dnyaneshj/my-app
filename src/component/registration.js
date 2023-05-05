import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    isIndian: false,
    country: "",
    range: "",
  });
  //  let url = "https://reqres.in/api/login:"
  //usename : eve.holt@reqres.in
  // pwd: cityslicks
  const countryList = ["INDIA", "PAK", "US", "China", "UK", "Russia"];

  const onChangeHandler = (event) => {
    const value =
      event.target.type == "checkbox"
        ? event.target.checked
        : event.target.value;
    console.log(value);
    setData({
      ...data,
      [event.target.name]: value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const payLoad = {
      name: data.name,
      email: data.email,
      password: data.password,
      dob: data.dob,
      gender: data.gender,
      isIndian: data.isIndian,
      country: data.country,
      range: data.range,
    };

    axios
      .post("https://reqres.in/api/login", payLoad)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div className='row'>
      <div className='col-12'>
        <h5>Employee Registration Form</h5>
        <form onSubmit={onSubmitHandler}>
          <div className='form-group'>
            <label htmlFor='name' className='form-group'>
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              value={data.name}
              onChange={onChangeHandler}
              className='form-control form-control-sm'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email' className=''>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              value={data.email}
              onChange={onChangeHandler}
              className='form-control form-control-sm'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password' className='form-group'>
              password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              value={data.password}
              onChange={onChangeHandler}
              className='form-control form-control-sm'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='dob'>Birthday:</label>
            <input
              type='date'
              className='form-control form-control-sm'
              id='dob'
              name='dob'
              value={data.dob}
              onChange={onChangeHandler}
            />
          </div>
          <div className='mb-2'>
            <div className='form-check-inline'>
              <label className='form-check-label'>
                <input
                  type='radio'
                  className='form-check-input'
                  name='gender'
                  value='Male'
                  onChange={onChangeHandler}
                />
                Male
              </label>
            </div>
            <div className='form-check-inline'>
              <label className='form-check-label'>
                <input
                  type='radio'
                  className='form-check-input'
                  name='gender'
                  value='Female'
                  onChange={onChangeHandler}
                />
                Female
              </label>
            </div>
          </div>
          <div className='mb-2'>
            <div className='form-check-inline'>
              <label className='form-check-label'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  onChange={onChangeHandler}
                  name='isIndian'
                />
                is Indian?
              </label>
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='sel1'>Select Country:</label>
            <select
              className='form-control form-control-sm'
              id='sel1'
              name='country'
              value={data.country}
              onChange={onChangeHandler}
            >
              {countryList.map((option) => {
                return (
                  <option value={option} key={option}>
                    {option}
                  </option>
                );
              })}
            </select>
          </div>
          <div className='form-group'>
            <input
              type='range'
              className='form-control-range form-control-sm'
              name='range'
              min='10'
              max='30'
              value={data.range}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <button type='submit' className='btn btn-success btn-md'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
