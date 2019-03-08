import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,

  ADD_START,
  ADD_SUCCESS,
  ADD_FAILURE,
} from '../actions'

 const initialState = {
   smurfs: [],
   activeSmurf: null,
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

    case ADD_START:
      return {
        ...state,
        addingSmurf: true,
        error: null
      }
    case ADD_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload,
        error: null
      }
    case ADD_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      }    
      
    default:
      return state;
  }
}

export default rootReducer;