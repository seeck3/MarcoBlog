import React, { Fragment, useState } from 'react';

import {
  Card,
  CardMedia,
  createStyles,
  Dialog,
  Grid,
  GridListTileBar,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import { images } from '../../asset/images';
import { GridImages } from './GridImages';
import { Maybe, SelectedImg } from '../type';
import { LeftColumn } from './LeftColumn';
import { clean_code, coffee_coding, sunflower } from '../../asset/aboutme';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    cardImg: {
      height: '100%',
      width: '100%',
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
    paragraph: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(2),
      height: '24vh',
      fontFamily: 'Impact, Charcoal, sans-serif',
      fontSize: 24,
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
                <LeftColumn />
              </Paper>
            </Grid>
            <Grid item xs={8}>
              <Paper className={classes.paper} elevation={3}>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Paper elevation={1}>
                      <Typography className={classes.paragraph} variant='body1'>
                        Loving and Enjoying My Coding Life
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={6}>
                    <Card className={classes.cardImg}>
                      <CardMedia
                        classes={{ root: classes.cardImg }}
                        image={coffee_coding}
                        title='coffee and coding'
                      />
                    </Card>
                  </Grid>

                  <Grid item xs={12}>
                    <Paper elevation={1}>
                      <Typography className={classes.paragraph} variant='body1'>
                        A Beautiful Solution
                      </Typography>
                    </Paper>
                  </Grid>

                  <Grid item xs={6}>
                    <Card className={classes.cardImg}>
                      <CardMedia
                        classes={{ root: classes.cardImg }}
                        image={clean_code}
                        title='coffee and coding'
                      />
                    </Card>
                  </Grid>
                  <Grid item xs={6}>
                    <Paper elevation={1}>
                      <Typography className={classes.paragraph} variant='body1'>
                        Clean and Easy Readable Code
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
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
