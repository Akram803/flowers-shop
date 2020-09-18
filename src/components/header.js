import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Heaer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let lastItem = ''
        if( localStorage.getItem('logged')==='yes' ){
            lastItem = (
                <ul class="navbar-nav navbar-nav-right">
                    <li class="nav-item"> 
                        <NavLink className="navbar-brand" to="/mycart" >My Cart</NavLink>
                    </li>
                    <li class="nav-item"> 
                        <a href='/' className='navbar-brand' onClick={()=>{localStorage.setItem('logged', 'no')}}>logout</a>
                    </li>
                </ul>
            )
        }else{
            lastItem = (
            <ul class="navbar-nav navbar-nav-right">
                <li class="nav-item">
                    <NavLink className="navbar-brand" to="/login" >login</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink className="navbar-brand" to="/register" >Register</NavLink>            
                </li>
            </ul>)
        } 

        return ( 
            <nav class="navbar navbar-expand-lg navbar-light bg-light px-2 py-2">
                {/* <BrowserRouter> */}
                <NavLink className="navbar-brand" to="/" >Flowers</NavLink>
                {/* </BrowserRouter> */}
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <NavLink className="navbar-brand" to="/" >Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="navbar-brand" to="/about-us" >About</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="navbar-brand" to="/contact-us" >Contact Us</NavLink>
                        </li>
                        
                    </ul> 
                    <ul class="navbar-nav navbar-nav-right">
                        {lastItem}
                    </ul>
                </div>
            </nav>
         );
    }
}
 
export default Heaer;