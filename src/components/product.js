import React, { Component } from 'react';
//
import data from './../data.json'
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            product: null,
            number: 0
        }
        
    }
    getProduct = () => {
        let id = this.props.match.params.id
        let prod = data.products.filter((p) => p.id==id )[0]
        // this.setState({product:prod})
        return prod
    }
    change = (e) => {

    }
    submit = (e) => {
        e.preventDefault()
    }
    render() { 
        let product = this.getProduct()
        return (
            <div class=''> 
                        <div class="row mt-5">
                            <div class="col-sm-6">
                                <img src={'/images/flowers/'+product.img} class="card-img w-100" alt="..." />
                            </div>

                            <div class="col-sm-6">
                                <div class="pl-4">
                                    <h2 class="pb-5"> {product.name} </h2>
                                    <h4 class="pb-4"> {product.price} EGP </h4>
                                    <p class="card-text">
                                        {product.description}
                                    </p>
                                    
                                    <form onSubmit={this.submit}>
                                        <input id='n' type='number' class='' />
                                        <button type='submit' id='buy' class='btn btn-success'>Buy</button>
                                    </form>


                                    <div class='d-flex justify-content-center'>
                                        <p>EGP</p>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
            </div>
         );
    }
}
 
export default Product;