import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
  }

  export default function InputsComponent() {
      const classes = useStyles();
      const [values, setValues] = React.useState<State>({
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
      });

    const handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [name]: event.target.value });
    };

  return (
    <form className={classes.container} noValidate autoComplete="off">
         <TextField
            id="outlined-multiline-static"
            label="New Food Adventures"
            multiline
            rows="4"
            defaultValue="Sexy Onions"
            className={classes.textField}
            margin="normal"
            variant="outlined"
      />
    </form>
  );
}

