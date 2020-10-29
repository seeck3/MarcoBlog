import React, { Fragment } from 'react';
import {
  createStyles,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { TechnicalSkills } from '../TechnicalSkills/TechnicalSkills';
import resume from '../Resume/resumeData';

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      fontSize: '1rem',
      fontWeight: 'bold',
    },
    divider: {
      margin: theme.spacing(1, 0),
    },
  })
);
export const LeftColumn = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Typography className={classes.title} variant='button'>
        Technical Skills
      </Typography>
      <Typography component='div'>
        <TechnicalSkills width={40} height={40} />
      </Typography>
      <Divider className={classes.divider} />
      <Typography className={classes.title} variant='button'>
        Work Experience
      </Typography>
      {resume.work_experiences.map((work) => (
        <Grid key={work.company.name} justify='space-between' container>
          <Typography component='span'>{work.company.name} </Typography>
          <Typography component='span'>
            {work.company.startAt + ' ~ ' + work.company.endAt}
          </Typography>
        </Grid>
      ))}
      <Divider className={classes.divider} />
      <Typography className={classes.title} variant='button'>
        Education
      </Typography>
      {resume.educations.map((edu) => (
        <Grid key={edu.school.name} justify='space-between' container>
          <Typography component='span'>{edu.school.name} </Typography>
          <Typography component='span'>
            {edu.school.startAt + ' ~ ' + edu.school.endAt}
          </Typography>
        </Grid>
      ))}
      <Divider className={classes.divider} />
    </Fragment>
  );
};
