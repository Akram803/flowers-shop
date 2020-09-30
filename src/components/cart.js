import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentOrder: JSON.parse(localStorage.getItem('currentOrder'))
        }
    }
    componentDidMount(){

    }
    getcurrentOrder(){

        // [{{}, n},{{}, n}, {{}, n}]
    }
    buy = ()=>{
        localStorage.setItem('currentOrder','[]')
        this.setState({
            currentOrder: []
        })
    }
    render() { 
        return ( 
            <div class='container'>
            <h2>current order</h2>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">name</th>
                        <th scope="col">price</th>
                        <th scope="col">count</th>
                        <th scope="col">total</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.currentOrder.map( (ord)=> (
                        <tr onClick={0}>
                            <td>{ord.product.name}</td>
                            <td>{ord.product.price}</td>
                            <td>{ord.n}</td>
                            <td>{ord.product.price * ord.n}</td>
                        </tr>
                        
                    )
                )}
                </tbody>
            </table>
            <h3>Total Price: {'00,0'} EGP</h3>
            <button type="button" class="btn btn-primary btn-block" onClick={this.buy}>BUY NOW</button>
            </div>
         );
    }
}
 
export default Cart;