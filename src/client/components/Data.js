import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../store/actions/getDataActions';

import { Card } from 'reactstrap';

const Data = ({ url }) => {
  const dispatch = useDispatch();
  const { data } = useSelector(state => ({ data: state.dataReducer.data }));

  useEffect(() => {
    dispatch(getData(url));
  }, [url]);
  return (
    <Card className="cardRow">
      <ul>
        {data &&
          data.entries.slice(0, 3).map(item => <li key={item.Description}>{item.Description}</li>)}
      </ul>
    </Card>
  );
};

export default Data;
