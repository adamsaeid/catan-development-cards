export const PLAYER_LOADING = 'PLAYER_LOADING';
export const PLAYER_SUCCESS = 'PLAYER_SUCCESS';
export const PLAY_DEVELOPMENT_CARD_LOADING = 'PLAY_DEVELOPMENT_CARD_LOADING';
export const PLAY_DEVELOPMENT_CARD_SUCCESS = 'PLAY_DEVELOPMENT_CARD_SUCCESS';

export const getPlayerLoading = () => ({
  type: PLAYER_LOADING,
});

export const getPlayerSuccess = (player) => ({
  type: PLAYER_SUCCESS,
  player
});

export const getPlayer = (playerId) => async (dispatch) => {
  dispatch(getPlayerLoading());
  const response = await fetch(`https://gentle-fortress-04729.herokuapp.com/players/${playerId}`);
  const player = await response.json();
  dispatch(getPlayerSuccess(player));
}

export const playDevelopmentCardLoading = () => ({
  type: PLAY_DEVELOPMENT_CARD_LOADING
})

export const playDevelopmentCardSuccess = () => ({
  type: PLAY_DEVELOPMENT_CARD_SUCCESS
})

export const playDevelopmentCard = (playerId, cardId) => async (dispatch) => {
  dispatch(playDevelopmentCardLoading());
  await fetch(`https://gentle-fortress-04729.herokuapp.com/${playerId}/play_card?card_id=${cardId}`, { method: 'POST' });
  dispatch(playDevelopmentCardSuccess());
}