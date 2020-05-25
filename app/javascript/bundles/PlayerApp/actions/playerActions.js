export const PLAYER_LOADING = 'PLAYER_LOADING';
export const PLAYER_SUCCESS = 'PLAYER_SUCCESS';

export const getPlayerLoading = () => ({
  type: PLAYER_LOADING,
})

export const getPlayerSuccess = (player) => ({
  type: PLAYER_SUCCESS,
  player
})

export const getPlayer = (playerId) => async (dispatch) => {
  dispatch(getPlayerLoading())
  const response = await fetch(`https://gentle-fortress-04729.herokuapp.com/players/${playerId}`)
  const player = await response.json();
  dispatch(getPlayerSuccess(player));
}