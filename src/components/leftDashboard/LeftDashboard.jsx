import React from 'react';
import {Link, NavLink}  from 'react-router-dom';
import "./style.scss"
import Routes from "../linkStore/Dashboard_links";
import { useState } from 'react';
export default function LeftDashboard() {

  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(!active);
  };

  return (
    <div className='leftdashboard' style={{width:active ? "18%":"15%", transition:"all 0.3s ease"}}>
      <div style={
        {width: active? "52px":"0px", height: "100%", borderRight: active? "2px solid rgb(10, 10, 10)":"0px", transition:"all 0.3s ease"}
        } className='dashboard1-active'>
          <img src="src\assets\images\disney+.png" alt="image-1" style={{width:active? "40px":"0px", height:"40px", transition:"all 0.3s ease"}} id="image-1"/>
          <img src="src\assets\images\netflix.png" alt="image-2" style={{width:active? "40px":"0px", height:"40px", transition:"all 0.3s ease"}} id="image-2"/>
          <img src="src\assets\images\hulu.png" alt="image-3" style={{width:active? "40px":"0px", height:"40px", transition:"all 0.3s ease"}} id="image-3"/>
      </div>
      <div className={active? "dashboard2-space":"dashboard-2"}>
      <p onClick={toggle}>MENU</p>
      <div className="container container-1">
        {
          Routes[0].map((route) => {
            return (
              <NavLink to={route.path} key={route.id} className="nav-container">
                <div className="links-container">
                  <div className="icon">{route.icon}</div>
                  <div className="links">{route.name}</div>
                </div>
              </NavLink>
            )
          })
        }
      </div>
      <div className="container container-2">
      {
          Routes[1].map((route) => {
            return (
              <NavLink to={route.path} key={route.id} className="nav-container">
                <div className="links-container">
                  <div className="icon">{route.icon}</div>
                  <div className="links">{route.name}</div>
                </div>
              </NavLink>
            )
          })
        }
      </div>
      <div className="container container-3">
      {
          Routes[2].map((route) => {
            return (
              <NavLink to={route.path} key={route.id} className="nav-container">
                <div className="links-container">
                  <div className="icon">{route.icon}</div>
                  <div className="links">{route.name}</div>
                </div>
              </NavLink>
            )
          })
      }
      </div>
      <div className="container container-4">
        {
          Routes[3].map((route) => {
            return (
              <NavLink to={route.path} key={route.id} className="nav-container">
                <div className="links-container">
                  <div className="icon">{route.icon}</div>
                  <div className="links">{route.name}</div>
                </div>
              </NavLink>
            )
          })
        }
      </div>
      </div>
    </div>
  );
}