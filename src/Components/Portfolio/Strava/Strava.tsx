import React from 'react';
import axios from 'axios';
import TableTitle from '../../GeneralComponents/TableTitle';
import { Activity } from './Activity';

export const Strava = () => {
  const [allActivities, setAllActivites] = React.useState<any>([]);

  const clientID = '68540';
  const clientSecret = 'cc1c76a813c3c7da77db9cd88e39584267b8618d';
  const refreshToken = 'b284334b3cbba6e6a24284d4a394419e4e26ce33';
  const auth_link = 'https://www.strava.com/oauth/token';
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
      const result = axios.get(
        'https://www.strava.com/api/v3/athlete/activities',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { data } = await result;
      setAllActivites(data);
    };
    getAllActivities();
  }, []);

  return (
    <div>
      <TableTitle title={'My Strava Activities'} />
      {allActivities?.map((activity: any, index: number) => (
        <Activity key={activity.id} activity={activity} />
      ))}
    </div>
  );
};
