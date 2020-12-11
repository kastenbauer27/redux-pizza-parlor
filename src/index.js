import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const pizzaReducer = (state = [], action) => {
    if (action.type === 'GET_PIZZA') {
        return action.payload
    }
    return state
}

const checkoutReducer = (state = [], action) => {
    if (action.type === 'ADD_TO_ORDER') {
        return [...state, action.payload]
    } else if (action.type === 'CHECKOUT') {
        return state = []
    } else if (action.type === 'DELETE') {
        let filteredPizza = state.filter((pizza) => {
            if (pizza.id !== action.payload)
                return true
        })
        return filteredPizza
    }
    return state
}

const customInfoReducer = (state = [], action) => {
    if (action.type === 'CUSTOMER_INFO') {
        return action.payload
    }
    return state
}



const storeInstance = createStore(
    combineReducers({
        pizzaReducer,
        checkoutReducer,
        customInfoReducer
    }),
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
