import React from 'react';
import { makeStyles, Theme, Typography, Box } from '@material-ui/core';
// type def
import AboutMe from '../AboutMe/AboutMe';
import GitHub from '../GitHub/GitHub';
import Resume from '../Resume/Resume';
import { Portfolio } from '../Portfolio/Portfolio';
import { Route, Switch } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: '94vh',
  },
}));
function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

const Container = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Switch>
        <Route exact path='/'>
          <TabPanel>
            <AboutMe />
          </TabPanel>
        </Route>
        <Route exact path='/resume'>
          <TabPanel>
            <Resume />
          </TabPanel>
        </Route>
        <Route path='/portfolio'>
          <TabPanel>
            <Portfolio />
          </TabPanel>
        </Route>
        <Route exact path='/github'>
          <TabPanel>
            <GitHub />
          </TabPanel>
        </Route>
      </Switch>
    </div>
  );
};

export default Container;
