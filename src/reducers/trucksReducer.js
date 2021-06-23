const initState = {
  trucks: []
};

const trucksReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_TRUCKS':
      return { ...state, trucks: action.payload.trucks };
    default:
      return { ...state };
  }
};

export default trucksReducer;
