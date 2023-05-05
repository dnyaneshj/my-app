import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <li>
            <Link to='insta'>Link to Insta</Link>
          </li>
          <li>
            <Link to='mail'>Link to Mail</Link>
          </li>
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Contact;
