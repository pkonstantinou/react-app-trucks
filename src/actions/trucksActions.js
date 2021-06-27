import axios from 'axios';
import { allTrucksUrl } from '../api';

export const fetchTrucks = () => async (dispatch) => {
  let success = false;

  while (!success) {
    try {
      const { data } = await axios.get(allTrucksUrl, {
        headers: { 'accept-language': 'en-US' }
      });

      success = true;

      dispatch({
        type: 'FETCH_TRUCKS',
        payload: { trucks: sortByPublishingDate(data) }
      });
    } catch (err) {
      console.log(err);
    }
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

export const sortTrucks = (sortingType) => async (dispatch, getState) => {
  const { fetchedTrucks, searchedTrucks } = getState();

  let sortedFetched = [];
  let sortedSearched = [];

  switch (sortingType) {
    case 'date':
      sortedFetched = sortByPublishingDate([...fetchedTrucks]);
      sortedSearched = sortByPublishingDate([...searchedTrucks]);
      break;
    case 'asc':
      sortedFetched = sortByAscendingPrice([...fetchedTrucks]);
      sortedSearched = sortByAscendingPrice([...searchedTrucks]);
      break;
    case 'desc':
      sortedFetched = sortByDescendingPrice([...fetchedTrucks]);
      sortedSearched = sortByDescendingPrice([...searchedTrucks]);
      break;
    default:
      throw new Error('Unknown sorting type!');
  }

  dispatch({
    type: 'SORT_TRUCKS',
    payload: { sortedFetched, sortedSearched }
  });
};

const sortByPublishingDate = (trucks) => {
  const sortedTrucks = trucks.sort((truckA, truckB) => {
    const dateA = new Date(truckA.offerPublicationDate);
    const dateB = new Date(truckB.offerPublicationDate);

    if (dateA < dateB) {
      return 1;
    }

    if (dateA > dateB) {
      return -1;
    }

    return 0;
  });

  return sortedTrucks;
};

const sortByAscendingPrice = (trucks) => {
  const sortedTrucks = trucks.sort((truckA, truckB) => {
    if (truckA.bidPrice > truckB.bidPrice) {
      return 1;
    }

    if (truckA.bidPrice < truckB.bidPrice) {
      return -1;
    }

    return 0;
  });

  return sortedTrucks;
};

const sortByDescendingPrice = (trucks) => {
  const sortedTrucks = trucks.sort((truckA, truckB) => {
    if (truckA.bidPrice < truckB.bidPrice) {
      return 1;
    }

    if (truckA.bidPrice > truckB.bidPrice) {
      return -1;
    }

    return 0;
  });

  return sortedTrucks;
};
