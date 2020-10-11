import React from "react";
// import { useQuery } from '@apollo/react-hooks';
import { Link } from "react-router-dom";
// import { pluralize } from "../../utils/helpers";
// import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_LIST, UPDATE_LIST_QUANTITY } from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";
import { useDispatch, useSelector } from 'react-redux';
import ReactPlayer from "react-player";



function ProductItem(item) {
  const {
    // image,
    name,
    firstName,
    lastName,
    _id,
  } = item;

  console.log(name)

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
 

  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
      <div>
      <ReactPlayer
        url={`https://www.twitch.tv/${name}`}
        playing = {false}
        muted = {true}
        width = {"240px"}
        height = {"151.49px"}
      />
    </div>
        <p>{name}</p>
        <p>{firstName}</p>
        <p>{lastName}</p>
      </Link>
      <button onClick={ addToList }>Add to list</button>
    </div>
  );
}

export default ProductItem;
