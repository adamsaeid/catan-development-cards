import { PLAYER_LOADING, PLAYER_SUCCESS } from '../actions/playerActions';

const initialState = {
  resources: {
    brick: 0,
    grain: 0,
    lumber: 0,
    ore: 0,
    wool: 0,
  },
  loading: false,
};

const playerReducer = (state = initialState, action) => {
  switch(action.type) {
    case PLAYER_LOADING:
      return {
        ...state,
        loading: true
      }
    case PLAYER_SUCCESS:
      return {
        ...state,
        ...action.player,
        loading: false,
      }
    default:
      return state;
  }
}

export default playerReducer;
