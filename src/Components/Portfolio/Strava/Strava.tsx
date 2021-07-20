import React from 'react';
import axios from 'axios';
import TableTitle from '../../GeneralComponents/TableTitle';
import { Activity } from './Activity';
import { makeStyles, Theme } from '@material-ui/core';
const clientID = process.env.REACT_APP_STRAVA_CLIENT_ID;
const clientSecret = process.env.REACT_APP_STRAVA_CLIENT_SECRET;
const refreshToken = process.env.REACT_APP_STRAVA_REFRESH_TOKEN;
const auth_link = process.env.REACT_APP_STRAVA_AUTH_LINK as string;
const api_url = process.env.REACT_APP_STRAVA_API_URL as string;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  activityContainer: {
    height: '80vh',
    overflow: 'auto',
  },
}));
export const Strava = () => {
  const classes = useStyles();
  const [allActivities, setAllActivites] = React.useState<any>([]);

  React.useEffect(() => {
    const params = JSON.stringify({
      client_id: clientID,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
    });
    const getAuth = async () => {
      const result = await axios.post(auth_link, params, {
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      });
      return Promise.resolve(result.data.access_token);
    };
    const getAllActivities = async () => {
      const token = await getAuth();
      const result = axios.get(`${api_url}/athlete/activities`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = await result;
      setAllActivites(data);
    };
    getAllActivities();
  }, []);

  return (
    <div className={classes.root}>
      <TableTitle title={'My Strava Activities'} />
      <div className={classes.activityContainer}>
        {allActivities?.map((activity: any, index: number) => (
          <Activity key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
};
