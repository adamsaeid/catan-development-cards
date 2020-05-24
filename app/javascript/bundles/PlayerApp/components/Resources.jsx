import React, { useEffect } from 'react';
import styled from 'styled-components'
import { useSelector, useDispatch } from "react-redux";
import { getResources } from '../actions/resourcesActions';
import Resource from './Resource';

const StyledResources = styled.div`
  max-width: 125rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
`;

export default () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();


  useEffect(() => {
    const interval = setInterval(() => {
    dispatch(getResources());
    }, 1000);
    return () => clearInterval(interval);
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
    <StyledResources>
      { 
        resourceArray().map((resource, index) => (
          <Resource key={index} type={resource} />
        ))
      }
    </StyledResources>
  )
};
