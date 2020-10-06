import React from "react";
import { Link } from "react-router-dom";
// import { pluralize } from "../../utils/helpers";
// import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_LIST, UPDATE_LIST_QUANTITY } from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";
import { useDispatch, useSelector } from 'react-redux';

function ProductItem(item) {
  const {
    image,
    name,
    _id,
    // price,
    // quantity
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
  

  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      <button onClick={ addToList }>Add to list</button>
    </div>
  );
}

export default ProductItem;
