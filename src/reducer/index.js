const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_MEMBERS':
      return {
        ...state,
        members: action.payload,
      };
    case 'ADD_MEMBERS':
      return {
        ...state,
        members: state.members.concat(action.payload),
      };
    case 'REMOVE_MEMBERS':
      return {
        ...state,
        members: state.members.filter((member) => member.id !== action.payload),
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
      };
    case 'REMOVE_CURRENT_USER':
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
};

export default Reducer;
