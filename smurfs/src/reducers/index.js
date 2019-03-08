import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,

  ADD_START,
  ADD_SUCCESS,
  ADD_FAILURE,

  DELETE_START,
  DELETE_SUCCESS,
  DELETE_FAILURE,

  UPDATE_START,
  UPDATE_SUCCESS,
  UPDATE_FAILURE,

  PREPOPULATE_UPDATE_FORM,

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
      
    case DELETE_START:
      return {
        ...state,
        deletingSmurf: true,
        error: null
      }
    case DELETE_SUCCESS:
      return {
        ...state,
        deletingSmurf: false,
        smurfs: action.payload,
        error: null
      }
    case DELETE_FAILURE:
      return {
        ...state,
        deletingSmurf: false,
        error: action.payload
      }

    case UPDATE_START:
      return {
        ...state,
        updatingSmurf: true,
        error: null
      }
    case UPDATE_SUCCESS:
      return {
        ...state,
        updatingSmurf: false,
        smurfs: action.payload,
        error: null
      }
    case UPDATE_FAILURE:
      return {
        ...state,
        updatingSmurf: false,
        error: action.payload
      }  
    
    case PREPOPULATE_UPDATE_FORM:
      return {
        ...state,
        activeSmurf: action.payload,
        error: null
      }  
      
    default:
      return state;
  }
}

export default rootReducer;