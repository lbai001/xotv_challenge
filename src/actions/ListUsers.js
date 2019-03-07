import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  applicationId: "aa2f3c3be8125f1fc86e3007153420c4e446c19b7b0c6d80a6257b281c9a0dc5",
  secret: "a5ab4ed2efdc772dca8d5636a26c0d897907df38cd92baa9067e57093d9596b5"
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
