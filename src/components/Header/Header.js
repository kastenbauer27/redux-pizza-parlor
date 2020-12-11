import React, { Component } from 'react';
import '../App/App.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux';
import './Header.css';

class Header extends Component {


    renderTotal() {
        let totalPrice = 0;
        let currentOrder = this.props.checkoutReducer
        console.log(currentOrder);
        for (let pizza of currentOrder){
            totalPrice += Number(pizza.price)
        }
        return totalPrice;
    }


    render(){
        
        return(
            <header className="App-header">
                <div>
                    <h1 className="App-title">Prime Pizza</h1>
                </div>
                <div>
                    <ShoppingCartIcon></ShoppingCartIcon>
                    <span>Total: {this.renderTotal()}</span>         
                </div>
            </header>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    checkoutReducer: reduxState.checkoutReducer
})

export default connect(mapStateToProps)(Header);
