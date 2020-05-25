import React, { useEffect } from 'react';
import styled from 'styled-components'
import { useSelector, useDispatch } from "react-redux";
import { getPlayer } from '../actions/playerActions';
import Resource from './Resource';

const StyledResources = styled.div`
  max-width: 125rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
`;

export default ({ playerId }) => {
  const resources = useSelector(state => state.resources);
  const dispatch = useDispatch();


  useEffect(() => {
    const interval = setInterval(() => {
    dispatch(getPlayer(playerId));
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  const resourceArray = () => {
    const resourceArr = []

    const resourceTypes = [
      'brick',
      'grain',
      'lumber',
      'ore',
      'wool'
    ];

    resourceTypes.forEach((type) => {
      const resourcesOfType = resources[type];
      for(let i = 0; i < resourcesOfType; i++) {
        resourceArr.push(type)
      }        
    })

    return resourceArr;
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
