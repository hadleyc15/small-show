import React from "react";
// import { useQuery } from '@apollo/react-hooks';
import { Link } from "react-router-dom";
// import { pluralize } from "../../utils/helpers";
// import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_LIST, UPDATE_LIST_QUANTITY, REMOVE_FROM_LIST } from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";
import { useDispatch, useSelector } from 'react-redux';
import ReactPlayer from "react-player";


function ProductItem(item) {
  const {
    twitchUserName,
    _id,
  } = item;

  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const { list } = state;

const addToList = () => {
  const itemInList = list.find((listItem) => listItem._id === _id)
  if (itemInList) {
    dispatch({
      type: UPDATE_LIST_QUANTITY,
      _id: _id,
      purchaseQuantity: parseInt(itemInList.purchaseQuantity) + 1
    });
    idbPromise('list', 'put', {
      ...itemInList,
      purchaseQuantity: parseInt(itemInList.purchaseQuantity) + 1
    });
  } else {
    dispatch({
      type: ADD_TO_LIST,
      product: { ...item, purchaseQuantity: 1 }
    });
    idbPromise('list', 'put', { ...item, purchaseQuantity: 1 });
  }
};

const removeFromList = () => {
  dispatch({
    type: REMOVE_FROM_LIST,
    _id: item._id
  });

  // upon removal from list, delete the item from IndexedDB using the `currentProduct._id` to locate what to remove
  idbPromise('list', 'delete', { ...item });
};
 

  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
      <div>
      <ReactPlayer
        url={`https://www.twitch.tv/${twitchUserName}`}
        playing = {false}
        muted = {true}
        width = {"410px"}
        height = {"220px"}
      />
    </div>
        <p>{twitchUserName}</p>
      </Link>

      <div className="button_cont">
              <button class="example_ab" onClick={addToList} rel="nofollow noopener">Add to Watch List</button>
              <button 
              disabled={!list.find(p => p._id === item._id)}
              onClick={removeFromList}
              class="example_ab" 
              rel="nofollow noopener">Remove From Watch List
              </button>
              </div>
    </div>
  );
}

export default ProductItem;
