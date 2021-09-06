import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  btn: {
    flexGrow: 1,
    marginTop: '30px',
    margin: '0 10px',
    borderRadius: '20px',
    color: 'white',
  }
}));

export default function CustomButton(props) {
  const classes = useStyles();

  return (
    <Button variant="contained" className={classes.btn} color={props.color}>
      {props.children}
    </Button>
  );
}
