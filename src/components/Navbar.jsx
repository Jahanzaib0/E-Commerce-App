import React, { useState } from "react";
import {Link} from 'react-router-dom'
const Navbar = (props) => {
  // const [logOut, setLogOut] = useState(false);
  const [search, setSearch] = useState();
  // console.log(search);
  console.log(props)
  return (
    <div>
      <h1
        className="bg-light text-primary justify-content-center d-flex"
        style={{ margin: "0px" }}
      >
        Our Shopping Center
      </h1>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          {/* <a className="navbar-brand " href="/">Our Shopping Center</a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/aboutUs">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/contactUs">
                  Contact Us
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange= { (e) => {
                  setSearch(e.target.value)
                }}
              />
              <button className="btn btn-outline-success" type="submit" onClick={(e)=>{
                e.preventDefault();
                props.SearchFunc(search.charAt(0).toLocaleUpperCase() + search.slice(1).toLowerCase());
              }}>
                Search
              </button>
            </form>
            {/* Modal LogIn  */}
            <button
              className="btn btn-outline-success mx-1"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={()=>{
                props.LogOutFunc(false)
              }}
            >
              LogOut
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
