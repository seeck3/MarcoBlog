import React from 'react';
import clsx from 'clsx';
import {
  createStyles,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { TableTitleProp } from '../type';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },

    title: {
      flex: '1 1 100%',
    },
  })
);
const TableTitle = ({ title }: TableTitleProp) => {
  const classes = useStyles();

  return (
    <Toolbar className={clsx(classes.root)}>
      <Typography
        className={classes.title}
        variant='h5'
        id='tableTitle'
        component='div'
      >
        {title}
      </Typography>
    </Toolbar>
  );
};

export default TableTitle;
