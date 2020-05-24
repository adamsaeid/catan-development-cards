import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";
import { getResources } from '../actions/resourcesActions';
import brick from '../images/brick.svg';
import grain from '../images/grain.svg';
import lumber from '../images/lumber.svg';
import ore from '../images/ore.svg';
import wool from '../images/wool.svg';

const StyledResource = styled.img`
  flex-basis: 22%;
  max-width: 3rem;
`;

export default ({ type }) => {
  const icon = (type) => {
    switch(type) {
      case 'brick':
        return brick;
      case 'grain':
        return grain;
      case 'lumber':
        return lumber;
      case 'ore':
        return ore;
      case 'wool':
        return wool;
    }
  }


  return (
    <StyledResource src={icon(type)} />
  )
};
