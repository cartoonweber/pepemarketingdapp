import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '88px'
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  menulist: {
    display: 'flex',
    fontSize: '1rem',
    fontWeight: 'bold',
    '& a': {
      textDecoration: 'none !important',
      color: '#000000de'
    },
    '& button': {
      fontWeight: 'bold',
      fontSize: '1rem'
    }
  },
  title: {
    fontWeight: 600
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Link to="/">
          <Typography variant="h4" className={classes.title}>
            MONKES
          </Typography>
        </Link>

        <List className={classes.menulist} component="nav">
          <ListItem>
            <Link to='/'>HOME</Link>
          </ListItem>
          <ListItem>
            <Link to='/'>MINT</Link>
          </ListItem>
          <ListItem>
            <Link to='/'>FAQ</Link>
          </ListItem>
          <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              Social
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}><FaTwitter /> Twitter</MenuItem>
              <MenuItem onClick={handleClose}><FaDiscord /> Discord</MenuItem>
              <MenuItem onClick={handleClose}><FaInstagram /> Instagram</MenuItem>
            </Menu>
          </div>
        </List>
          
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};