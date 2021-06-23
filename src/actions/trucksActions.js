import axios from 'axios';
import { allTrucksUrl } from '../api';

export const fetchTrucks = () => async (dispatch) => {
  const { data } = await axios.get(allTrucksUrl, {
    headers: { 'accept-language': 'en-US' }
  });

  dispatch({ type: 'FETCH_TRUCKS', payload: { trucks: data } });
};
