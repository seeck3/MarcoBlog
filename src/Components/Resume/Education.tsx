import React from 'react';

import {
  makeStyles,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Divider,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

import { Educations } from '../type';

type Props = {
  educations: Educations[];
};

const useStyles = makeStyles({
  container: {
    width: '100%',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
});

const Education = ({ educations }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {educations.map((edu) => (
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMore />}>
            <div className={classes.title}>
              <Typography>{edu.school.name} </Typography>
              <Typography>
                {(edu.school.startAt ? edu.school.startAt + ' ~ ' : '') +
                  (edu.school.endAt ? edu.school.endAt : '')}
              </Typography>
            </div>
          </ExpansionPanelSummary>
          <Divider />
          <ExpansionPanelDetails>
            <Typography>{edu.school.description}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
};

export default Education;
