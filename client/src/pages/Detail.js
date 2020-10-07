import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';

import { QUERY_PRODUCTS } from "../utils/queries";
import spinner from '../assets/spinner.gif'

// import { useStoreContext } from "../utils/GlobalState";
import { useDispatch, useSelector } from 'react-redux';
import {
  REMOVE_FROM_LIST,
  UPDATE_LIST_QUANTITY,
  ADD_TO_LIST,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import List from '../components/List';

import { idbPromise } from "../utils/helpers";

function Detail() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({})

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, list } = state;

  const addToList = () => {
    const itemInList = list.find((listItem) => listItem._id === id)
  
    if (itemInList) {
      dispatch({
        type: UPDATE_LIST_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInList.purchaseQuantity) + 1
      });
      // if we're updating quantity, use existing item data and increment purchaseQuantity value by one
      idbPromise('list', 'put', {
        ...itemInList,
        purchaseQuantity: parseInt(itemInList.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_LIST,
        product: { ...currentProduct, purchaseQuantity: 1 }
      });
      // if product isn't in the list yet, add it to the current shopping list in IndexedDB
      idbPromise('list', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  }
  

  const removeFromList = () => {
    dispatch({
      type: REMOVE_FROM_LIST,
      _id: currentProduct._id
    });
  
    // upon removal from list, delete the item from IndexedDB using the `currentProduct._id` to locate what to remove
    idbPromise('list', 'delete', { ...currentProduct });
  };

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find(product => product._id === id));
    } 
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products
      });
  
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  return (
    <>
      {currentProduct ? (
        <div className="container my-1">
          <Link to="/">
            ← Back to Products
          </Link>

          <h2>{currentProduct.name}</h2>

          <p>
            {currentProduct.description}
          </p>

          <p>
            <strong>Price:</strong>
            ${currentProduct.price}
            {" "}
            <button onClick={addToList}>Add to list</button>
            <button
              disabled={!list.find(p => p._id === currentProduct._id)}
              onClick={removeFromList}
            >
              Remove from list
</button>
          </p>

          <img
            src={`/images/${currentProduct.image}`}
            alt={currentProduct.name}
          />
        </div>
      ) : null}
      {
        loading ? <img src={spinner} alt="loading" /> : null
      }
      <List />
    </>
  );
};

export default Detail;
