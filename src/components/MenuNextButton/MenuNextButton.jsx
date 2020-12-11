import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,
        marginTop: 285
    },
});


class MenuNextButton extends Component {

    goNext = () => {
        this.props.history.push('/customerInfo');
    }

    render() {
        const classes = this.props.classes
        return (
            <div>
                <Button variant="contained" color="primary" size='large' className={classes.button} onClick={this.goNext}>Next</Button>
            </div>
        )
    }
}

export default withRouter(withStyles(styles)(MenuNextButton));