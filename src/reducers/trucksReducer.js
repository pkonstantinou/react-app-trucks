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

    default:
      return { ...state };
  }
};

export default trucksReducer;
