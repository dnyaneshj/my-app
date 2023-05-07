import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const TODO = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);

  const postData = () => {
    setData([...data, form]);
    setForm(form);
  };

  const removeItems = (index) => {
    if (data.length == 1) return;
    const tempList = [...data];
    tempList.splice(index, 1);
    setData(tempList);
  };
  console.log(data);
  return (
    <>
      <h5>TO DO APP</h5>
      <div className='container  mt-3'>
        <div className='row'>
          <div className='col-6'>
            <div className='form-floating mt-3 mb-3'>
              <input
                type='text'
                className='form-control'
                id='name'
                placeholder='Enter user name'
                name='fname'
                value={form.fname}
                onChange={(e) => setForm({ ...form, fname: e.target.value })}
              />
              <label for='pwd'>Name</label>
            </div>
            <div className='form-floating mb-3 mt-3'>
              <input
                type='text'
                className='form-control'
                id='email'
                placeholder='Enter email'
                name='email'
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <label for='email'>Email</label>
            </div>
            <div className='form-floating mt-3 mb-3'>
              <input
                type='text'
                className='form-control'
                id='pwd'
                placeholder='Enter password'
                name='pwd'
                value={form.pwd}
                onChange={(e) => setForm({ ...form, pwd: e.target.value })}
              />
              <label for='pwd'>Password</label>
            </div>
            <button
              type='submit'
              className='btn btn-primary me-2'
              onClick={postData}
            >
              Submit
            </button>
            <button onClick={() => navigate("/player")}>
              Go TO Player Component
            </button>
          </div>
          <div className='col-6'>
            <ol>
              {data.map((items, index) => {
                return (
                  <li key={index}>
                    {items.fname} {items.email} {items.pwd}
                    <span className='danger' onClick={() => removeItems(index)}>
                      Delete
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};
export default TODO;
