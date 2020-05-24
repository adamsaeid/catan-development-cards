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
  const response = await fetch('https://gentle-fortress-04729.herokuapp.com/players//1/resources')
  const resources = await response.json();
  dispatch(getResourcesSuccess(resources));
}