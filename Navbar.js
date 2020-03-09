import React from 'react';
import {NavLink} from 'react-router-dom';


const Navbar =()=> {
    return(
        <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Tomorrow Shopping Cart</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/shoplist">Shopping List</NavLink></li>

          </ul>
        </div>
      </nav>
    )

}

export default Navbar