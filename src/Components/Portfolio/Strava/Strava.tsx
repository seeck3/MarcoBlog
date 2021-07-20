import React from 'react';
import axios from 'axios';
import TableTitle from '../../GeneralComponents/TableTitle';
import { Activity } from './Activity';
const clientID = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
const refreshToken = process.env.REACT_APP_REFRESH_TOKEN;
const auth_link = process.env.REACT_APP_AUTH_LINK as string;
const api_url = process.env.REACT_APP_API_URL as string;
export const Strava = () => {
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
    <div>
      <TableTitle title={'My Strava Activities'} />
      {allActivities?.map((activity: any, index: number) => (
        <Activity key={activity.id} activity={activity} />
      ))}
    </div>
  );
};
