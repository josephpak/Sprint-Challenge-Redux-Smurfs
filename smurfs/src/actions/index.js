/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const ADDING_START = 'ADDING_START';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';

export const DELETING_START = 'DELETING_START';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILURE = 'DELETE_FAILURE';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getData = () => dispatch => {
  dispatch({ type: FETCH_START })

  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res)
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: FETCH_FAILURE, payload: err});
    })
}
