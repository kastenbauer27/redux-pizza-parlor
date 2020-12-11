import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Menu from '../Menu/Menu'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Checkout from '../Checkout/Checkout';
import CustomerInfo from '../CustomerInfo/CustomerInfo'
import Admin from '../Admin/Admin'


class App extends Component {

  componentDidMount() {
    this.getPizzaMenu()
  }

  getPizzaMenu = () => {
    axios.get('/api/pizza').then(response => {
      console.log(response.data);
      this.props.dispatch({ type: 'GET_PIZZA', payload: response.data });
    }).catch(err => {
      console.log('Error in GET', err);
      alert('Unable to get pizza menu.');
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <nav>
            <ul>
              <li><Link to='/'>Menu</Link></li>
              <li><Link to='/customerInfo'>Customer Info</Link></li>
              <li><Link to='/checkout'>Checkout</Link></li>

            </ul>
          </nav>

          <Route exact path='/'>
            <Menu getPizzaMenu={this.getPizzaMenu} />
          </Route>
          <Route path='/checkout' component={Checkout}>
          </Route>
          <Route path='/customerInfo' component={CustomerInfo} />
          <Route path='/admin' component={Admin}/>
        </Router>

      </div>
    );
  }
}

export default connect()(App);
