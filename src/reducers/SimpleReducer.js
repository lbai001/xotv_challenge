const initialState = { 
    users: [],
    photos: [],
    currentUser: false,
    error: null
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'LIST_USERS':
        return {
            ...state,
            users: action.payload
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