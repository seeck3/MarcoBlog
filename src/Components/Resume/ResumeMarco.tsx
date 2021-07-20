import React from 'react';

import {
  makeStyles,
  Typography,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

import resume from './resumeData';
import WorkExperience from './WorkExperience';
import Education from './Education';
import TableBodyContainer from '../GitHub/TableBodyContainer';
import { TechnicalSkills } from '../TechnicalSkills/TechnicalSkills';
const useStyles = makeStyles({
  boxContainer: {},
  imgBox: {
    width: 50,
    height: 50,
    margin: 5,
    borderRadius: '50%',
  },
  heading: {
    fontSize: 18,
  },
});

const ResumeMarco = () => {
  const classes = useStyles();

  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography className={classes.heading}>Summary</Typography>
        </AccordionSummary>
        <Divider />
        <AccordionDetails>{resume.summary}</AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography className={classes.heading}>Technical Skills</Typography>
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <TechnicalSkills width={50} height={50} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography className={classes.heading}>Personal Project</Typography>
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <TableBodyContainer />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography className={classes.heading}>Experience</Typography>
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <WorkExperience experiences={resume.work_experiences} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography className={classes.heading}>Education</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Education educations={resume.educations} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ResumeMarco;
