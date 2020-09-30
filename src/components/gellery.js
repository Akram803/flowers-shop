import React, { Component } from 'react';
import { Link } from "react-router-dom";
//
import data from './../data.json'
class Gellary extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    getCols = (products) => {
        let cols = products.map((p) => (
                <div class='col-md-6'>
                    <div class="card mb-5 w-100 p-2 shadow" >
                        <div class="row no-gutters">
                            <div class="col-sm-6">
                                <img src={'/images/flowers/'+p.img} class="card-img w-100 h-100" alt="..." />
                            </div>
                            <div class="col-sm-6">
                                <div class="card-body">
                                    <h5 class="card-title"> {p.name} </h5>
                                    <p class="card-text">
                                        {p.description.substr(0,120)+'. . . . .'}
                                        <Link to={'/product/'+p.id}>read more</Link>
                                    </p>
                                    <div class='d-flex justify-content-center'>
                                        <p>{p.price} EGP</p>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            ))
        return cols
    }
    makeGrid = (products, rowWidth) => {
        let colsCount = products.length
        let rowsCount = Math.ceil( colsCount / rowWidth )
        let cols = this.getCols(products)  // array
        let rows = new Array(rowWidth)  // [empty, empty]
        
        for(let i=0; i<rowsCount; i++){
            rows[i] = <div class='row '>
                        {cols[i*rowWidth]}
                        {cols[i*rowWidth+1]}
                    </div>
        }
        return rows
    } 

    render() { 
        let grid = this.makeGrid(data.products, 2) //[row, row, row]
        console.log(grid)
        return ( 
            <div className='px-lg-5'>
            <React.Fragment>
                {grid}
            </React.Fragment>
            </div>                
         );
    }
}
 
export default Gellary;










