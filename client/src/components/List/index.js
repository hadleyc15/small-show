import React, { useEffect } from "react";
import ListItem from '../ListItem';
// import Auth from '../../utils/auth';
import './style.css';
// import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_LIST, ADD_MULTIPLE_TO_LIST } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
// import { QUERY_CHECKOUT } from '../../utils/queries';
// import { loadStripe } from '@stripe/stripe-js';
// import { useLazyQuery } from '@apollo/react-hooks';
import { useDispatch, useSelector } from 'react-redux';

// const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const List = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  

  useEffect(() => {
    async function getList() {
      const list = await idbPromise('list', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_LIST, products: [...list] });
    };

    if (!state.list.length) {
      getList();
    }
  }, [state.list.length, dispatch]);

  function toggleList() {
    dispatch({ type: TOGGLE_LIST });
  }

  if (!state.listOpen) {
    return (
      <div className="list-closed" onClick={toggleList}>
        <span
          role="img"
          aria-label="trash">💾</span>
      </div>
    );
  }

  return (
    <div className="list">
      <div className="close" onClick={toggleList}>[close]</div>
      <h2>Saved Streamers</h2>
      {state.list.length ? (
        <div>
          {state.list.map(item => (
            <ListItem key={item._id} item={item} />
          ))}
        </div>
      ) : (
          <h3>
            <span role="img" aria-label="shocked">
              😱
      </span>
      You haven't added anyone to your list yet!
          </h3>
        )}
    </div>

  );
};

export default List;