import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
        display: 'grid',
        flexWrap: 'wrap',
        marginLeft: 400,
        marginRight: 400
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
    button: {
        margin: theme.spacing.unit,
    },
});

class CustomerInfo extends Component {

    state = {
        customerInfo: {
            name: '',
            streetAddress: '',
            city: '',
            zip: '',
            method: ''
        }
    }

    handleChange = (event, inputProperty) => {
        this.setState({
            customerInfo: {
                ...this.state.customerInfo,
                [inputProperty]: event.target.value
            },
        });
    }

    // goNext = () => {

    // }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.dispatch({ type: 'CUSTOMER_INFO', payload: this.state.customerInfo })
        this.props.history.push('/checkout');
    }

    render() {
        const { classes } = this.props;
        const { name, streetAddress, city, zip } = this.state.customerInfo
        return (
            <div>
                <h2>Customer Information</h2>
                <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit} >
                    <TextField
                        id="outlined-name"
                        label="Name"
                        className={classes.textField}
                        value={name}
                        onChange={(event) => this.handleChange(event, 'name')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Street Address"
                        className={classes.textField}
                        value={streetAddress}
                        onChange={(event) => this.handleChange(event, 'streetAddress')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="City"
                        className={classes.textField}
                        value={city}
                        onChange={(event) => this.handleChange(event, 'city')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Zip"
                        className={classes.textField}
                        value={zip}
                        onChange={(event) => this.handleChange(event, 'zip')}
                        margin="normal"
                        variant="outlined"
                    />

                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Method</FormLabel>
                        <RadioGroup
                            aria-label="Method"
                            name="Method"
                            className={classes.group}
                            value={this.state.customerInfo.method}
                            onChange={(event) => this.handleChange(event, 'method')}
                        >
                            <FormControlLabel value="Pickup" control={<Radio />} label="Pickup" />
                            <FormControlLabel value="Delivery" control={<Radio />} label="Delivery" />
                        </RadioGroup>
                    </FormControl>
                    <Button variant="contained" color="primary" type='submit' className={classes.button} >Next</Button>
                </form>
            </div>
        )
    }
}

export default withStyles(styles)(connect()(CustomerInfo));