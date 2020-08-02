/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom"
export class Navbar extends Component {
    componentDidMount() {
        document.addEventListener("DOMContentLoaded", function () {
          var elems = document.querySelectorAll(".sidenav");
          // eslint-disable-next-line
          var instances = M.Sidenav.init(elems, {});
        });
      }
    render() {
        return (
            <div>
           <nav className="blue">
    <div class="nav-wrapper">
    <div className="container">
  
      <ul className="move" > 
      <Link to="/home">
        <li>Home <i class="fas fa-home"></i>&nbsp;</li>
      </Link>
      {" "}  {" "}  {" "} {" "} {" "}  {" "}  {" "} {" "}{" "}  {" "}  {" "} {" "}{" "}  {" "}  {" "} {" "}{" "}  {" "}  {" "} {" "}
      <Link to="/about">
        <li>About <i class="far fa-id-card"></i>&nbsp;</li>
      </Link>
      {" "} {" "}  {" "}  {" "}
      <Link to="/login">
        <li>Login <i class="fas fa-sign-in-alt"></i>&nbsp;</li>
      </Link>
      {" "} {" "}  {" "}  {" "}
      <Link to="/signup">
        <li>Sign Up <i class="fas fa-file-signature"></i>&nbsp;</li>
      </Link>
      {" "} {" "}  {" "} {" "} 
      <Link to="/products">
        <li>Products <i class="fas fa-shopping-cart"></i>&nbsp;</li>
      </Link>
      {" "}  {" "}  {" "} {" "}
      </ul>

    </div>
    </div>
    
  </nav>
 

            </div>
        )
    }
}

export default Navbar
