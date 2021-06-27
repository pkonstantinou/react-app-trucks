const initState = {
  fetchedTrucks: [],
  searchedTrucks: [],
  isFetching: true
};

const trucksReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_TRUCKS':
      return {
        fetchedTrucks: action.payload.trucks,
        searchedTrucks: action.payload.trucks,
        isFetching: false
      };

    case 'SEARCH_TRUCKS':
      return {
        ...state,
        searchedTrucks: action.payload.trucks
      };

    case 'SORT_TRUCKS':
      return {
        ...state,
        fetchedTrucks: action.payload.sortedFetched,
        searchedTrucks: action.payload.sortedSearched
      };

    default:
      return { ...state };
  }
};

export default trucksReducer;
