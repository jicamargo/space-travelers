import axios from 'axios';
import { ROCKETS_URL, MISSIONS_URL } from './apiconfig';

export const fetchRocketsData = async () => {
  try {
    const response = await axios.get(`${ROCKETS_URL}`);
    const rockets = response.data.map((rocket) => ({
      ...rocket,
      reserved: false, // Add the reserved property to each rocket
    }));
    return rockets;
  } catch (error) {
    throw new Error('Failed to fetch Rockets');
  }
};

export const fetchMissionsData = async () => {
  try {
    const response = await axios.get(`${MISSIONS_URL}`);
    const missions = response.data.map((mission) => ({
      ...mission,
      reserved: false, // Add the reserved property to each rocket
    }));
    return missions;
  } catch (error) {
    throw new Error('Failed to fetch missions');
  }
};
