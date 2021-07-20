import React from 'react';
import {
  makeStyles,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
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
        <Accordion key={edu.school.name}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <div className={classes.title}>
              <Typography>{edu.school.name} </Typography>
              <Typography>
                {(edu.school.startAt ? edu.school.startAt + ' ~ ' : '') +
                  (edu.school.endAt ? edu.school.endAt : '')}
              </Typography>
            </div>
          </AccordionSummary>
          <Divider />
          <AccordionDetails>
            <Typography>{edu.school.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Education;
