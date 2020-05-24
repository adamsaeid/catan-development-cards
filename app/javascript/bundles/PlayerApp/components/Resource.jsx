import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getResources } from '../actions/resourcesActions';

export default ({ type }) => {
  return (
    <div>
      <p>{ type }</p>
    </div>
  )
};
