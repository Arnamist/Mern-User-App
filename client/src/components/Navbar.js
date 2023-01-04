import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const logWhat = async () => {
      try {
          const res = await fetch('/getdata', {
              method: "GET",
              headers: {
                  "Content-Type": "application/json"
              },
          });
          await res.json();
          setShow(true);

      } catch (err) {
          console.log(err);
      }
  }

  useEffect(() => {
      logWhat();
  });

  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="#">Navbar</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">

      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to={!show? "/login": "/logout"}>{!show?'Login':'Logout'}</NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/signup">Registration</NavLink>
      </li>    
      
    </ul>
    
  </div>
</nav>
    </>
  )
}

export default Navbar