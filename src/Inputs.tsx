import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

/**
 * make a button - on click of button look at whats inside the text box now :)  
 * 
 * Change the function to a class so you can use state 
 * https://reactjs.org/docs/hooks-state.html
 */


const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
  }));

  interface State {
    name: string;
    age: string;
    multiline: string;
    currency: string;
    foods: string[];
  }

  export default function InputsComponent() {
      const classes = useStyles();
      const [values, setValues] = React.useState<State>({
        name: 'Some foods will go here :D',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
        foods: ['food']
      });

    const handleChange = (name: keyof State, foods:keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        alert('values in box changed to: ' + name)
        var currentFoods = foods;
        console.log(currentFoods);
        var newFoods = foods.concat(name);
        setValues({ ...values, [name]: event.target.value });
        setValues({ ...values, [foods]: newFoods });
    };

  return (
    <form noValidate autoComplete="off">
         <TextField
            id="outlined-multiline-static"
            label="New Food Adventures"
            multiline
            rows="4"            
            defaultValue={values.name}
            className={classes.textField}   
            onChange = {handleChange('name', 'foods')}         
            margin="normal"
            variant="outlined"
      />

        <Button color="primary" onClick={() => { console.log() }}>
            Food things
        </Button>
    </form>
  );
}

