export const RESOURCES_LOADING = 'RESOURCES_LOADING';
export const RESOURCES_SUCCESS = 'RESOURCES_SUCCESS';

export const getResourcesLoading = () => ({
  type: RESOURCES_LOADING,
})

export const getResourcesSuccess = (resources) => ({
  type: RESOURCES_SUCCESS,
  resources
})

export const getResources = () => async (dispatch) => {
  dispatch(getResourcesLoading())
  const response = await fetch('http://localhost:3000/players/1/resources')
  const resources = await response.json();
  console.log(resources)
  dispatch(getResourcesSuccess(resources));
}