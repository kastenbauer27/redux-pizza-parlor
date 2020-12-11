import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.common.gray,
      },
    },
  }))(TableRow);

class Checkout extends Component {

    state = {
        checkoutInfo: {
            customer_name: '',
            streetAddress: '',
            city: '',
            zip: '',
            method: '',
            total: 0,
            pizzas: ''
        }
    }

    calcTotal = () => {
       let total= 0;
       total = this.props.checkoutReducer.map(pizza => total = Number(total+ Number(pizza.price)));
       let returnValue = total.slice(-1).pop();
       return returnValue;
    }

    handleCheckout = () => {
        this.setState({
            checkoutInfo: {
                customer_name: this.props.customInfoReducer.name,
                streetAddress: this.props.customInfoReducer.streetAddress,
                city: this.props.customInfoReducer.city,
                zip: this.props.customInfoReducer.zip,
                method: this.props.customInfoReducer.method,
                total: this.calcTotal(),
                pizzas: this.props.checkoutReducer.map(pizza => pizza.name)
            }
         }) 
         axios.post('/api/order', this.state).then(response => {
                console.log(response.data);
                this.props.dispatch( { type: 'CHECKOUT' } );
                this.props.history.push('/');
            }).catch(err => {
                console.log('Error in posting order to server', err);
                alert('Unable to complete order, please try again later.');
            })
        this.props.dispatch( { type: 'CHECKOUT' } );
        this.props.history.push('/');
    }

    render () {
        console.log('Ready to submit order', this.state.checkoutInfo);
        return (
            <div>
                <h3>Checkout</h3>
                <div className="addressFlex">
                    <div className="addressElements">
                        <p>{this.props.customInfoReducer.name}</p>
                        <p>{this.props.customInfoReducer.streetAddress}</p>
                        <p>{this.props.customInfoReducer.city}</p>
                        <p>{this.props.customInfoReducer.zip}</p>
                    </div>
                    <div>
                        <p>For: {this.props.customInfoReducer.method}</p>
                    </div>
                </div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell>Cost</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.checkoutReducer.map(pizza => 
                            (<TableRow>
                                <StyledTableCell>{pizza.name}</StyledTableCell>
                                <StyledTableCell>{pizza.price}</StyledTableCell>
                            </TableRow>))}
                    </TableBody>
                </Table>
                <div>
                    {/* Total cost in the cart goes here */}
                <h2>Total: ${this.calcTotal()}</h2>
                    {/* Checkout submit button, post to order router , clear checkoutReducer, back to main page */}
                    <button onClick={this.handleCheckout}>Checkout</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    checkoutReducer: reduxState.checkoutReducer,
    customInfoReducer: reduxState.customInfoReducer
});

export default connect(mapStateToProps)(Checkout); 