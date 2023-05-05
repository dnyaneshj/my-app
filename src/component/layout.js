import React from "react";
import Parent from "./a";
import Addmore from "./addMore";
import AddF from "./addFriend";
import Mapdata from "./mapData";
import Players from "./player";
import Feedback from "./feedback";
import Questions from "./questions";
import ChildToParent from "./childToparent";
//import {Routes,Route,Link} from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import DisplayCommon from "./displayCommon";
import TODO from "./toDo";
import Insta from "./insta";
import Mail from "./Mail";
import Contact from "./contact";
import TCS from "./tcs";
import FormsComponent from "./forms";
import ClassForm from "./classForm";
import ApiCall from "./apiCall";
import FormClass from "./formClass";
import Register from "./registration";
const Layout = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "none",
      color: isActive ? "blue" : "white",
    };
  };
  return (
    <>
      <div className='row'>
        <div className='col-2'>
          <ul style={{ listStyleType: "none", padding: 20 }}>
            <li>
              {" "}
              <NavLink to='/forms' style={navLinkStyles}>
                Forms
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to='/FormClass' style={navLinkStyles}>
                FormClass
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to='/ApiCall' style={navLinkStyles}>
                ApiCall
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to='/FormReact' style={navLinkStyles}>
                FormReact
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to='/Register' style={navLinkStyles}>
                Register
              </NavLink>
            </li>

            <li>
              <NavLink to='/' style={navLinkStyles}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/player' style={navLinkStyles}>
                player
              </NavLink>
            </li>
            <li>
              <NavLink to='/addmore' style={navLinkStyles}>
                addmore
              </NavLink>
            </li>
            <li>
              <NavLink to='/mapdata' style={navLinkStyles}>
                mapdata
              </NavLink>
            </li>
            <li>
              <NavLink to='/addfriend' style={navLinkStyles}>
                addfriend
              </NavLink>
            </li>
            <li>
              <NavLink to='/parent' style={navLinkStyles}>
                parent A
              </NavLink>
            </li>
            <li>
              <NavLink to='/child' style={navLinkStyles}>
                Child compo
              </NavLink>
            </li>
            <li>
              <NavLink to='/displayCommon' style={navLinkStyles}>
                Display Common
              </NavLink>
            </li>
            <li>
              <NavLink to='/toDo' style={navLinkStyles}>
                ToDo App
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact' style={navLinkStyles}>
                Sub Navigation
              </NavLink>
            </li>
            <li>
              <NavLink to='/tcs' style={navLinkStyles}>
                TCS
              </NavLink>
            </li>
          </ul>
        </div>

        <div className='col-10' style={{ padding: "10px" }}>
          <Routes>
            <Route path='/' element={<Questions />}>
              {" "}
            </Route>
            <Route path='/Register' element={<Register />}></Route>
            <Route path='/forms' element={<FormsComponent />}></Route>
            <Route path='/ClassForm' element={<ClassForm />}></Route>
            <Route path='/FormClass' element={<FormClass />}></Route>
            <Route path='/ApiCall' element={<ApiCall />}></Route>
            <Route path='/player' element={<Players />}>
              {" "}
            </Route>
            <Route path='/addmore' element={<Addmore />}></Route>
            <Route path='/addfriend' element={<AddF />}></Route>
            <Route path='/mapdata' element={<Mapdata />}></Route>
            <Route path='/parent' element={<Parent />}></Route>
            <Route path='/child' element={<ChildToParent />}></Route>
            <Route path='/displayCommon' element={<DisplayCommon />}></Route>
            <Route path='/toDo' element={<TODO />}></Route>
            <Route path='/tcs' element={<TCS />}></Route>
            <Route path='/contact' element={<Contact />}>
              <Route index element={<Insta />}></Route>
              <Route path='insta' element={<Insta />}></Route>
              <Route path='mail' element={<Mail />}></Route>
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
};
export default Layout;
