//CONSTANTS
const GET_USER = "GET_USER";

//Action Creators

export function getUser(id, userName, profilePicture) {
  console.log("Return", id, userName, profilePicture);
  return {
    type: GET_USER,
    payload: { id, userName, profilePicture }
  };
}

//Initial State

const initialState = {
  id: 0,
  userName: "",
  profilePicture: ""
};

// Reducer

export default function reducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case GET_USER:
      //   const { data } = action.payload;
      return {
        ...state,
        id: action.payload.id,
        userName: action.payload.userName,
        profilePicture: action.payload.profilePicture
      };
    default:
      return state;
  }
}
