import React, { Component } from 'react'
import PizzaCard from '../PizzaCards/PizzaCards';
import { connect } from 'react-redux';
import MenuNextButton from '../MenuNextButton/MenuNextButton';
import './Menu.css'

class Menu extends Component {
    render() {
        return (
            <div>
                <h2>Pick Your Pizza!</h2>
                <div className='cardContainer'>
                    {this.props.pizzaReducer.map(pizza => (
                        <PizzaCard key={pizza.id} getPizzaMenu={this.props.getPizzaMenu} pizza={pizza} />
                    ))}
                    <MenuNextButton />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    pizzaReducer: reduxState.pizzaReducer
})

export default connect(mapStateToProps)(Menu); 