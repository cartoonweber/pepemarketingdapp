import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  slider: {
    marginTop: '40px',
    width: '80%',
    padding: '10px 20px',
    display: 'flex'
  }
}));

export default function CustomSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.slider}>
      <Slider
        value={value}
        min={0}
        step={1}
        max={30}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
      <div>
      </div>
    </div>
  );
}