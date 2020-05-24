import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getResources } from '../actions/resourcesActions';

export default () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getResources())
  }, [])

  return (
    <div>
      <h2>
        Resources
      </h2>
      <ul>
        <li>Brick: { state.brick }</li>
        <li>Grain: { state.grain }</li>
        <li>Lumber: { state.lumber }</li>
        <li>Ore: { state.ore }</li>
        <li>Wool: { state.wool }</li>
        <li>Loading: { state.loading ? 'yes' : 'no' }</li>
      </ul>
    </div>
  )
};
