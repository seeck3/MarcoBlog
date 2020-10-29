import React, { Fragment, useState } from 'react';

import {
  createStyles,
  Dialog,
  Divider,
  Grid,
  GridListTileBar,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import { images } from '../../asset/images';
import { GridImages } from './GridImages';
import { TechnicalSkills } from '../TechnicalSkills/TechnicalSkills';
import resume from '../Resume/resumeData';
import { Maybe, SelectedImg } from '../type';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    fullImage: {
      maxHeight: '80vh',
    },
    paper: {
      padding: theme.spacing(1),
      height: '86vh',
    },
    imageContainer: {
      paddingRight: 0,
    },
    title: {
      fontSize: '1rem',
      fontWeight: 'bold',
    },
    divider: {
      margin: theme.spacing(1, 0),
    },
  })
);

const AboutMe = () => {
  const classes = useStyles();
  const [selectedImg, setSelectedImg] = useState<Maybe<SelectedImg>>(null);

  return (
    <Fragment>
      <Grid alignItems='center' className={classes.root} container spacing={3}>
        <Grid item xs={9}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Paper className={classes.paper} elevation={3}>
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
                  <Grid
                    key={work.company.name}
                    justify='space-between'
                    container
                  >
                    <Typography component='span'>
                      {work.company.name}{' '}
                    </Typography>
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
              </Paper>
            </Grid>
            <Grid item xs={8}>
              <Paper className={classes.paper} elevation={3}>
                <Typography variant='body1'>
                  {`I am a determined developer with a particular passion for solving everyday problems in effective ways. Most recently, I joined the AI team as full stack web developer using MEAN stack. I am dedicated to constantly learning and looking for an opportunity where I can make a meaningful contribution to a team.`}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper} elevation={3}>
            <GridImages setSelectedImg={setSelectedImg} images={images} />
          </Paper>
        </Grid>
      </Grid>
      {selectedImg && (
        <Dialog
          maxWidth='lg'
          open={selectedImg ? true : false}
          onBackdropClick={() => setSelectedImg(null)}
        >
          <img
            className={classes.fullImage}
            src={selectedImg.img}
            alt={selectedImg.title}
          />
          <GridListTileBar
            title={selectedImg.title}
            subtitle={<span>by: {selectedImg.author}</span>}
          />
        </Dialog>
      )}
    </Fragment>
  );
};

export default AboutMe;
