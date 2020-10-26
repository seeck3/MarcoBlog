import React from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Tabs,
  Tab,
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
    flexGrow: 1,
  },
  tabContainer: {
    flexGrow: 4,
  },
}));

const Header = ({ value, setValue }: HeaderProps) => {
  const classes = useStyles();

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' className={classes.title}>
          Marco's Blog
        </Typography>
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
