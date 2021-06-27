import axios from 'axios';
import { allTrucksUrl } from '../api';

export const fetchTrucks = () => async (dispatch) => {
  try {
    const { data } = await axios.get(allTrucksUrl, {
      headers: { 'accept-language': 'en-US' }
    });

    dispatch({ type: 'FETCH_TRUCKS', payload: { trucks: data } });
  } catch (err) {
    console.log(err, '\nFailed to fetch trucks!');
  }
};

export const searchTrucks = (searchString) => async (dispatch, getState) => {
  const { fetchedTrucks } = getState();

  const matchingTrucks = fetchedTrucks.filter((truck) => {
    const titleMatching = truck.title
      .toLowerCase()
      .includes(searchString.toLowerCase());

    const tagMatching = truck.tags
      .join(' ')
      .toLowerCase()
      .includes(searchString.toLowerCase());

    return titleMatching || tagMatching;
  });

  dispatch({
    type: 'SEARCH_TRUCKS',
    payload: { trucks: matchingTrucks }
  });
};
