import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#ec1f0f',
    height: '100vh',
    display: 'flex',
    padding: '0 20px'
  },
  image: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  title: {
    color: 'white',
    textAlign: 'center',
    '& h2': {
      fontSize: '72px',
      marginBottom: 0,
    },
    '& h4': {
      fontSize: '24px'
    }
  }
}));

export default function Home(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.image}>
        <div>
          <img src='./images/image.jpeg' />
        </div>
      </div>
      <div id='animation1' className={classes.title}>
        <h2>Welcome new frens!</h2>
        <h4>No non-frens allowed.</h4>
      </div>
      <div id='animation2' className={classes.title}>
        <h2>Welcome new frens!</h2>
        <h4>No non-frens allowed.</h4>
      </div>
      <div id='animation3' className={classes.title}>
        <h2>Welcome new frens!</h2>
        <h4>No non-frens allowed.</h4>
      </div>
      <div id='animation4' className={classes.title}>
        <h2>Welcome new frens!</h2>
        <h4>No non-frens allowed.</h4>
      </div>
    </div>
  );
}