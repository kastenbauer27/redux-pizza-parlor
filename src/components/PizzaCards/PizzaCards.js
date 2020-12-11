import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PizzaCard.css'

//Material UI stuff
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const styles = {
  card: {
    maxWidth: 345,
    marginLeft: 40,
    marginRight: 200,
    marginBottom: 50,
  },
  media: {
    height: 140,
  },
};



class PizzaCard extends Component {


  handleAdd = (pizzaName) => {


    this.props.dispatch({
      type: 'ADD_TO_ORDER', payload: pizzaName
    })
  }

  handleDelete = (pizza) => {
    console.log(pizza);

    this.props.dispatch({
      type: 'DELETE', payload: pizza
    })
  }

  render() {
    const classes = this.props.classes
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={this.props.pizza.image_path}
            title={this.props.pizza.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.pizza.name}
            </Typography>
            <Typography component="p">
              {this.props.pizza.description}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.pizza.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* TODO - still need to add to add the name of the menu item to the PizzaName so it can add to the state */}
          <Button className='button' onClick={() => this.handleAdd(this.props.pizza)} size="small" color="primary">
            Add
          </Button>

          <Button className='button' size="small" color="primary" onClick={() => this.handleDelete(this.props.pizza.id)}>
            Remove
          </Button>
        </CardActions>
      </Card>

    );
  }
}





export default withStyles(styles)(connect()(PizzaCard));

