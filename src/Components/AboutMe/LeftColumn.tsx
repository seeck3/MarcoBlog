import React, { Fragment } from 'react';
import {
  Card,
  CardContent,
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
    companyContainer: {
      display: 'flex',
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
          <Card elevation={0}>
            {/* will add link to resume workexperience */}
            {/* <CardActionArea onClick={() => console.log('??????????')}> */}
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {work.company.name}
              </Typography>
              <Typography variant='body1' color='textPrimary' component='p'>
                {work.company.title}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                {work.company.startAt + ' ~ ' + work.company.endAt}
              </Typography>
            </CardContent>
            {/* </CardActionArea> */}
          </Card>
        </Grid>
      ))}
      <Divider className={classes.divider} />
      <Typography className={classes.title} variant='button'>
        Education
      </Typography>
      {resume.educations.map((edu) => (
        <Grid key={edu.school.name} justify='space-between' container>
          <Card elevation={0}>
            {/* will add link to resume education */}
            {/* <CardActionArea onClick={() => console.log('??????????')}> */}
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {edu.school.name}
              </Typography>
              <Typography variant='body1' color='textPrimary' component='p'>
                {edu.school.description}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                {edu.school.startAt ?? ''}
                {edu.school.startAt ? ' ~ ' : ''}
                {edu.school.endAt ?? 'present'}
              </Typography>
            </CardContent>
            {/* </CardActionArea> */}
          </Card>
        </Grid>
      ))}
      <Divider className={classes.divider} />
    </Fragment>
  );
};
