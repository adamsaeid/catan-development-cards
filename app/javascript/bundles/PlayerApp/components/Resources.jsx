import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getResources } from '../actions/resourcesActions';
import Resource from './Resource';

export default () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getResources())
  }, [])

  const resourceArray = () => {
    const resources = []

    const resourceTypes = [
      'brick',
      'grain',
      'lumber',
      'ore',
      'wool'
    ];

    resourceTypes.forEach((type) => {
      const resourcesOfType = state[type];
      for(let i = 0; i < resourcesOfType; i++) {
        resources.push(type)
      }        
    })

    return resources;
  };

  return (
    <div>
      <h2>
        Resources
      </h2>
      { 
        resourceArray().map((resource, index) => <Resource key={index} type={resource} />)
      }
    </div>
  )
};
