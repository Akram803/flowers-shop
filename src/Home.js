import React, {Component, Fragment} from 'react';
import { BrowserRouter, Route, Redirect  } from "react-router-dom";
//
import Header from "./components/header";
import Footer from "./components/footer";
import Login from "./components/login";
import Register from "./components/register";

import Product from "./components/gellery/product";
import Gellary from "./components/gellery/gellery";
import Cart from "./components/gellery/cart";

import About from "./components/about-us"; 
import ContactUs from "./components/contact-us";
//
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
//
import './Home.css'

// import 'jquery/dist/jquery.js'
// import $ from 'jquery';

if ( !localStorage.getItem('username') ){
    
    localStorage.setItem('username', '')
    localStorage.setItem('mail', '')
    localStorage.setItem('phone', '')

    localStorage.setItem('logged', 'no')
    localStorage.setItem('currentOrderPrice','[]')   // list
    localStorage.setItem('currentOrder','[]')   // list
    localStorage.setItem('previuseOrder','[]')  // list of lists
}



class Home extends Component {
  constructor(props) {
    super(props); 
    this.state = { 
        username: localStorage.getItem('username'),
        logged: localStorage.getItem('logged'),
        test: ''
     }
  }
  update = () => {
      this.setState({})
  }
  render() { 
     
    return ( 
        <Fragment>
            <BrowserRouter>

                <Header />
                <div className='container-fluid main'>
                    
                    <Route 
                        exact 
                        path='/login' 
                        component={()=>{
                            return localStorage.getItem('logged')==='yes' ?
                                <Redirect to='/'/> : <Login update={this.update} />
                        }} 
                    /> 

                    <Route 
                        exact 
                        path='/register' 
                        component={()=>{
                            return localStorage.getItem('username') ? 
                                <Redirect to='/login'/> : <Register update={this.update}/>
                        }} 
                    /> 

                    <Route 
                    exact 
                    path='/mycart' 
                    component={()=> {
                        return localStorage.getItem('logged')==='yes' ? <Cart/> : <Redirect to='/login'/>
                    } } /> 

                    <Route exact path='/' component={Gellary} /> 
                    <Route exact path='/product/:id' component={Product} /> 

                    <Route exact path='/about-us' component={About} /> 
                    <Route exact path='/contact-us' component={ContactUs} />
                     
                </div>
                <Footer />
            </BrowserRouter>
        </Fragment>
    );
  }
}
 
export default Home;