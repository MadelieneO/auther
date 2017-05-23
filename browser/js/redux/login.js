import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const SET_CURRENT_USER = 'SET_CURRENT_USER';

/* ------------   ACTION CREATORS     ------------------ */

const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user: user,
});

/* ------------       REDUCER     ------------------ */

export default function reducer (user = {}, action) { // setCurrentUser (Action Creater is second argument)
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.user;

    default:
      return user;
  }
}


/* ------------       DISPATCHERS     ------------------ */

export const verifyUser = () => dispatch => {
  axios.post('/login')
  .then(res => dispatch(setCurrentUser(res.data)))
  .catch(console.error);
}
