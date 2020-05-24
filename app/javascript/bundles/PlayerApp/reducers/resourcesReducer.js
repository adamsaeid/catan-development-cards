import { RESOURCES_LOADING, RESOURCES_SUCCESS } from '../actions/resourcesActions';

const initialState = {
  brick: 0,
  grain: 0,
  lumber: 0,
  ore: 0,
  wool: 0,
  loading: false,
};

const resourcesReducer = (state = initialState, action) => {
  console.log(action)
  switch(action.type) {
    case RESOURCES_LOADING:
      console.log('i am loading')
      return {
        ...state,
        loading: true
      }
    case RESOURCES_SUCCESS:
      return {
        ...state,
        ...action.resources,
        loading: false,
      }
    default:
      return state;
  }
}

export default resourcesReducer;
