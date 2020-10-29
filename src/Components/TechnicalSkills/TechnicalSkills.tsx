import React, { Fragment } from 'react';
import techIcons from '../../asset/icons/index';
import { makeStyles, Tooltip } from '@material-ui/core';
import { TechnicalSkillsProps } from '../type';
const useStyles = makeStyles({
  boxContainer: {},
  imgBox: {
    margin: 5,
    borderRadius: '50%',
  },
  heading: {
    fontSize: 18,
  },
});
export const TechnicalSkills = ({ width, height }: TechnicalSkillsProps) => {
  const classes = useStyles();

  return (
    <Fragment>
      {techIcons.map((i) => (
        <Tooltip key={i.name} title={i.name}>
          <img
            height={height}
            width={width}
            alt={i.name}
            className={classes.imgBox}
            src={i.img}
          />
        </Tooltip>
      ))}
    </Fragment>
  );
};
