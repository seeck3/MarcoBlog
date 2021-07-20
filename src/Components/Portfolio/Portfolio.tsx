import React from 'react';
import { Strava } from './Strava/Strava';
import { Switch, Route, Link } from 'react-router-dom';
import { Button, makeStyles, Theme } from '@material-ui/core';
import GitHub from '../GitHub/GitHub';
const useStyles = makeStyles((theme: Theme) => ({
  linkButton: {
    textDecoration: 'none',
    color: 'white',
  },
  stravaButton: {
    backgroundColor: '#fc5200',
  },
  githubButton: {
    backgroundColor: 'black',
  },
}));

export const Portfolio = () => {
  const classes = useStyles();

  return (
    <>
      <Link to='/portfolio/strava' className={classes.linkButton}>
        <Button
          className={classes.stravaButton}
          color='primary'
          variant='contained'
        >
          strava
        </Button>
      </Link>
      <Link to='/portfolio/github' className={classes.linkButton}>
        <Button
          className={classes.githubButton}
          color='primary'
          variant='contained'
        >
          github
        </Button>
      </Link>
      <Switch>
        <Route path='/portfolio/strava'>
          <Strava />
        </Route>
        <Route path='/portfolio/github'>
          <GitHub />
        </Route>
      </Switch>
    </>
  );
};
