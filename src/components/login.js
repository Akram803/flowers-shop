import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            mail: '',
            logged: false
         }
    }
    change = (e) => {
        let name = e.target.name ,    
            val = e.target.value 
        this.setState({
            [name]: val  
        })
    }
    submit = (e) => {
        e.preventDefault()
        let error = ''
        error = (this.state.mail) ? error : 'enter your mail'
        error = (this.state.username) ? error : 'enter your username'
        this.setState({
            massage: error ? <div className='alert alert-danger'>{error}</div> : '' 
        })

        if( this.state.username === localStorage.getItem('username') &&
            this.state.mail === localStorage.getItem('mail'))
        {
            localStorage.setItem('logged', 'yes')
            this.props.update()
        }else{
            this.setState({
                massage: <div className='alert alert-danger'>
                            invalide username or mail (-_-)
                        </div>
            })
        }

    }

    render() { 
        return ( 
            <form class='col-md-4 pt-5 text-center' onSubmit={this.submit}>
                    {this.state.massage}
                    <div class="form-group">
                        <label for="exampleInputEmail1">username</label>
                        <input type="text" class="form-control" name="username" placeholder="username" onChange={this.change} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">mail</label>
                        <input type='mail' class="form-control" name="mail" aria-describedby="emailHelp" placeholder="someone@ex.com" onChange={this.change}/>
                    </div>
                    <button type='submit' class='btn btn-outline-primary btn-block'>LogIn</button>
            </form>
         );
    }
}
 
export default Login;