const initialState = {
    users: [],
    photos: [],
    currentUser: false,
    error: null,
    searching: false
  }

  export default (state = initialState, action) => {
    switch (action.type) {
      case 'SEARCHING':
        return {
          ...state,
          searching: true
        }
      case 'LIST_USERS':
        return {
            ...state,
            users: action.payload,
            searching: false
        }
      case 'USER_PHOTOS':
        return {
            ...state,
            photos: action.payload,
            currentUser: true
        }
      case 'ERROR' :
        return {
            ...state,
            error: action.payload
        }
      default:
        return state
      }
  }
