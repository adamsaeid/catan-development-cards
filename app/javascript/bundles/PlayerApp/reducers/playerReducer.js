import { 
  PLAYER_LOADING,
  PLAYER_SUCCESS,
  PLAY_DEVELOPMENT_CARD_LOADING,
  PLAY_DEVELOPMENT_CARD_SUCCESS,
} from '../actions/playerActions';

const initialState = {
  resources: {
    brick: 0,
    grain: 0,
    lumber: 0,
    ore: 0,
    wool: 0,
  },
  loading: false,
  playDevelopmentCardLoading: false,
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
    case PLAY_DEVELOPMENT_CARD_LOADING:
      return {
        ...state,
        playDevelopmentCardLoading: true,
      }
    case PLAY_DEVELOPMENT_CARD_SUCCESS:
      return {
        ...state,
        playDevelopmentCardLoading: false,
      }
    default:
      return state;
  }
}

export default playerReducer;
