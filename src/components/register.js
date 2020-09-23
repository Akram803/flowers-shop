import React, { Component } from 'react';
import {  Link  } from "react-router-dom";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            mail: '',
            phone:'',
            massage: ''
         }
    }

    change = (e) => {
        let name = e.target.name ,    
            val = e.target.value ,
            error = '' 

        if(name==='username' && val ){
            error = (val.length>=5 && val.length<=15)?
                        '' : 'username must be between 5 and 15 chars'
        }
        if(name==='mail' && val ){

        }
        if(name==='phone' && val){
            error = !Number(val) ? 'phone must be numbers' : error
            error = val.length > 13 ? 'too long number' : error
        }

        this.setState({
            [name]: val  ,  
            massage: error ? <div className='alert alert-danger'>{error}</div> : ''    
        })
    }
    submit = (e) => {
        e.preventDefault()
        let error = ''
        error = (this.state.phone) ? error : 'enter your phone'
        error = (this.state.mail) ? error : 'enter your mail'
        error = (this.state.username) ? error : 'enter your username'

        let mailPattern = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!mailPattern.test(this.state.mail)){
            error = 'Please provide a valid email addressw'
        }
        if( error ){
            this.setState({
                massage: error ? <div className='alert alert-danger'>{error}</div> : '' 
            })
        }else{
            localStorage.setItem('username', this.state.username)
            localStorage.setItem('mail', this.state.mail)
            localStorage.setItem('phone', this.state.phone)
            localStorage.setItem('currentOrder','[]')

            this.setState({})
            this.props.update()
             
        }
    }  

    render() { 
            return ( 
                <div class="row justify-content-center">
                    <form class='col-md-4 text-center py-5 shadow rounded registerform' onSubmit={this.submit}>
                        <h3 class="mb-5">register</h3>
                        {this.state.massage}
                        <div class="form-group">
                            <label for="exampleInputEmail1">username</label>
                            <input type="text" class="form-control" name="username" placeholder="username" onChange={this.change} />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">mail</label>
                            <input type='mail' class="form-control" name="mail" aria-describedby="emailHelp" placeholder="someone@ex.com" onChange={this.change}/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">phone</label>
                            <input type='phone' class="form-control" name="phone" aria-describedby="emailHelp" defaultValue='+2' onChange={this.change} />
                        </div>
                        <button type='submit' class='btn btn-outline-primary btn-block'>Regiser</button>
                    </form>
                </div>
             );
        
    }
}
 
export default Register;