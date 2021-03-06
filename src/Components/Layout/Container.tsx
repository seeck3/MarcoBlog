import React from 'react';
import { makeStyles, Theme, Typography, Box } from '@material-ui/core';

// type def
import { ContainerProps } from '../type';
import AboutMe from '../AboutMe/AboutMe';
import GitHub from '../GitHub/GitHub';
import Resume from '../Resume/Resume';
import { Portfolio } from '../Portfolio/Portfolio';

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
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

const Container = ({ value }: ContainerProps) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <TabPanel value={value} index={0}>
        <AboutMe />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Resume />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Portfolio />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <GitHub />
      </TabPanel>
    </div>
  );
};

export default Container;
