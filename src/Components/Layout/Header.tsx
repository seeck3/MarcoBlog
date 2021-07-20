import React from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Grid,
  Box,
  Button,
} from '@material-ui/core';

import { NavLink } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  linkButton: {
    textDecoration: 'none',
    // color: 'white',
  },
  active: {
    '& button': {
      // background: 'black',
      opacity: '0.5',
    },
  },
  buttonText: {
    color: 'white',
  },
  tabContainer: {
    justifyContent: 'space-evenly',
    display: 'flex',
  },
  alignItems: {
    alignItems: 'center',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position='static'>
      <Toolbar className={classes.root}>
        <Grid classes={{ container: classes.alignItems }} container>
          <Grid item xs={2}>
            <Typography variant='h6'>Marco's Blog</Typography>
          </Grid>

          <Grid item xs={10}>
            <Box
              className={classes.tabContainer}
              aria-label='simple Box example'
            >
              <NavLink
                exact
                to='/'
                className={classes.linkButton}
                activeClassName={classes.active}
              >
                <Button className={classes.buttonText}>
                  <Typography variant='button'>About Me</Typography>
                </Button>
              </NavLink>
              <NavLink
                exact
                to='/resume'
                className={classes.linkButton}
                activeClassName={classes.active}
              >
                <Button className={classes.buttonText}>
                  <Typography variant='button'>resume</Typography>
                </Button>
              </NavLink>
              <NavLink
                to='/portfolio'
                className={classes.linkButton}
                activeClassName={classes.active}
              >
                <Button className={classes.buttonText}>
                  <Typography variant='button'>portfolio</Typography>
                </Button>
              </NavLink>
              <NavLink
                to='/github'
                className={classes.linkButton}
                activeClassName={classes.active}
              >
                <Button className={classes.buttonText}>
                  <Typography variant='button'>github</Typography>
                </Button>
              </NavLink>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
