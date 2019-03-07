import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  applicationId: "a3489a0532d81edf297078780f3e7a1f46d5dce0ce695747c829c55980251def",
  secret: "0c434c7582ccd241304e3e2970dc0ed18a38aefe485f73e3df450237512c45f6"
});

export const getUsers = (user) => dispatch => {
    dispatch({
      type: 'SEARCHING'
    })
    return unsplash.search.users(user, 1)
    .then(toJson)

    .then(json => {
        dispatch({
            type: "LIST_USERS",
            payload: json
        })
    })
    .catch(err => {
        dispatch({
            type: "ERROR",
            payload: err
        })
    })
}

export const getPhotos = (userId) => dispatch => {
    return unsplash.users.photos(userId, 1, null, "popular", false)
    .then(toJson)
    .then(json => {
      dispatch({
          type: "USER_PHOTOS",
          payload: json
      })
    })
    .catch(err => {
        dispatch({
            type: "ERROR",
            payload: err
        })
    })
}
