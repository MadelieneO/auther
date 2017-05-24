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

// returns a function that's invoked later by redux thunk
export const verifyUser = (user) => dispatch => {
  axios.post('/login', { email: user.email, password: user.password })
  .then(res => dispatch(setCurrentUser(res.data)))
  .catch(console.error);
}
