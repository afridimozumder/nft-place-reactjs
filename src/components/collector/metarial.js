import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Edit } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  field: {
    '& > *': {
      margin: theme.spacing(1),
      width: '20ch',
    },
  },
/*   button: {
    '& > *': {
      margin: theme.spacing(1),
    },
  }, */
}));

export function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.field} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Make an Offer" variant="outlined" />
    </form>
  );
}
/* export function OutlinedButtons() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Button variant="outlined" color="secondary" href={`/proof/`}>
          Submit
        </Button>
      </div>
    );
  } */