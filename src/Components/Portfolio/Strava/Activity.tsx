import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import React from 'react';
import { ActivityProps } from '../../type';
import polylineMapbox from '@mapbox/polyline';
import { Map } from './Map';
import { convertMeterToMile, convertMPSToMPH } from '../../utils';

const useStyles = makeStyles({
  heading: {
    fontSize: 18,
  },
  detailContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  detailContent: {
    display: 'flex',
  },
  contentColumn: {
    flexGrow: 1,
  },
});
export const Activity = ({ activity }: ActivityProps) => {
  const classes = useStyles();
  const [polyline, setPolyline] = React.useState<any>();
  const [showMap, setShowMap] = React.useState(false);
  const getPolylines = () => {
    const activity_polyline = activity.map.summary_polyline;
    const activity_name = activity.name;
    const activity_elevation = activity.total_elevation_gain;
    const polylines = {
      activityPositions: polylineMapbox.decode(activity_polyline),
      activityName: activity_name,
      activityElevation: activity_elevation,
    };
    setPolyline(polylines);
  };
  return (
    <Accordion onChange={getPolylines}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography className={classes.heading}>{activity.name}</Typography>
      </AccordionSummary>
      <Divider />
      <AccordionDetails className={classes.detailContainer}>
        <div className={classes.detailContent}>
          <div className={classes.contentColumn}>
            <Typography>
              Total Miles: {convertMeterToMile(activity.distance)}miles
            </Typography>
            <Typography>
              AVG Speed: {convertMPSToMPH(activity.average_speed)}mph
            </Typography>
            <Typography>
              Total Elevation: {activity.total_elevation_gain}ft
            </Typography>
          </div>
          <div className={classes.contentColumn}>
            <Typography>
              Weighted Average Watt: {activity.weighted_average_watts ?? 0}w
            </Typography>
            <Typography>Max Watt: {activity.max_watts ?? 0}w</Typography>
            <Typography>
              Average Cadence: {activity.average_cadence ?? 0}
            </Typography>
          </div>
        </div>
        <Button
          color='primary'
          variant='outlined'
          onClick={() => setShowMap(!showMap)}
        >
          {showMap ? 'Hide Map' : 'Show Map'}
        </Button>
        {showMap && <Map {...polyline} />}
      </AccordionDetails>
    </Accordion>
  );
};
