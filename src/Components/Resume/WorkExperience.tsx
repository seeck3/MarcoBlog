import React from 'react';
import {
  makeStyles,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core';
import { ExpandMore, FiberManualRecord } from '@material-ui/icons';

// Typedefs
import { WorkExperiences } from '../type';

type Props = {
  experiences: WorkExperiences[];
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

const WorkExperience = ({ experiences }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {experiences.map((work) => (
        <Accordion key={work.company.name}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <div className={classes.title}>
              <Typography>
                {work.company.name} - {work.company.title}
              </Typography>
              <Typography>
                {work.company.startAt + ' ~ ' + work.company.endAt}
              </Typography>
            </div>
          </AccordionSummary>
          <Divider />
          <AccordionDetails>
            <List>
              {work.company.experience.map((exp) => (
                <ListItem key={exp}>
                  <ListItemIcon>
                    <FiberManualRecord />
                  </ListItemIcon>
                  <ListItemText>{exp}</ListItemText>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default WorkExperience;
