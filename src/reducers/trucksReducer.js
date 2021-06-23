const initState = {
  trucks: [],
  isFetching: true
};

const trucksReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_TRUCKS':
      return { ...state, trucks: action.payload.trucks, isFetching: false };
    default:
      return { ...state };
  }
};

export default trucksReducer;
