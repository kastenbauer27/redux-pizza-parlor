import React, { Component } from 'react';
import { connect } from 'react-redux';
// material UI Table stuff
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { HashRouter as Router, Route, Link } from 'react-router-dom';




const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
    row: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  });
  
  let id = 0;
  function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  

function InventoryTable (props) {
}

class Admin extends Component {
    
        render() {
            // const { classes } = props;
            return (
                <>
                    <h2>Admin View</h2>
                    <Paper > 
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <CustomTableCell>Name</CustomTableCell>
                                    <CustomTableCell align="right">Time Order Placed</CustomTableCell>
                                    <CustomTableCell align="right">Type</CustomTableCell>
                                    <CustomTableCell align="right">Cost</CustomTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/* TODO - this all needs to be uptdated to the state of the reducer */}
                            {/* {props.list.map(item => (
                                <TableRow className={classes.item} key={item.id}>
                                <CustomTableCell component="th" scope="row">
                                    {item.name}
                                </CustomTableCell>
                                <CustomTableCell align="right">{item.quantity}</CustomTableCell>
                                <CustomTableCell align="right">{item.measure}</CustomTableCell>
                                <CustomTableCell align="right"><Button onClick={() => props.editItem(item)} variant="contained" color="grey" className={classes.button}>Edit</Button>
                                                                <Button onClick={ () => props.deleteItem(item.id)} variant="contained" color="grey" className={classes.button}>Delete</Button></CustomTableCell>
                                </TableRow>
                            ))} */}
                            </TableBody>
                        </Table>
                    </Paper>   
                </>
            );
        }
    }


      Admin.propTypes = {
        classes: PropTypes.object.isRequired,
      };

            const mapStateToProps = (reduxState) => ({
        checkoutReducer: reduxState.checkoutReducer
    })
      
    export default connect(mapStateToProps)(Admin);
    
