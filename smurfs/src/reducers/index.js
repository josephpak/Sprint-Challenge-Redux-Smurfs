import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from '../actions'
import { isNull } from 'util';


 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: null
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload,
        error: null
      }
    case FETCH_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }  
    default:
      return state;
  }
}

export default rootReducer;