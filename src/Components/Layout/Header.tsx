import React from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Tabs,
  Tab,
  Grid,
} from '@material-ui/core';

// Type Def
import { HeaderProps } from '../type';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // fontSize: '24px',
  },
  tabContainer: {
    flexGrow: 4,
  },
  alignItems: {
    alignItems: 'center',
  },
}));

const Header = ({ value, setValue }: HeaderProps) => {
  const classes = useStyles();

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };
  return (
    <AppBar position='static'>
      <Toolbar className={classes.root}>
        <Grid classes={{ container: classes.alignItems }} container>
          <Grid item xs={2}>
            <Typography variant='h6' className={classes.title}>
              Marco's Blog
            </Typography>
          </Grid>

          <Grid item xs={10}>
            <Tabs
              className={classes.tabContainer}
              value={value}
              onChange={handleChange}
              aria-label='simple tabs example'
            >
              <Tab
                label={
                  <Typography variant='button' className={classes.title}>
                    About Me
                  </Typography>
                }
                {...a11yProps(0)}
              />
              <Tab label='Resume' {...a11yProps(1)} />
              <Tab label='Item Three' {...a11yProps(2)} />
              <Tab label='GitHub' {...a11yProps(3)} />
            </Tabs>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default Header;
