import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){

    }
    getcurrentOrder(){

        // [{{}, n},{{}, n}, {{}, n}]
    }
    render() { 
        let currentOrder = JSON.parse(localStorage.getItem('currentOrder'))
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
                {currentOrder.map( (ord)=> (
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
            <button type="button" class="btn btn-primary btn-block">BUY NOW</button>
            </div>
         );
    }
}
 
export default Cart;