import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ALL_USERS } from "../utils/queries";
import spinner from '../assets/spinner.gif'
import { useDispatch, useSelector } from 'react-redux';
import {
  REMOVE_FROM_LIST,
  UPDATE_LIST_QUANTITY,
  ADD_TO_LIST,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import List from '../components/List';
import { idbPromise } from "../utils/helpers";
import ReactPlayer from "react-player";


function Detail() {

  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const { id } = useParams();

  const [currentUser, setCurrentUser] = useState({})

  const { loading, data } = useQuery(QUERY_ALL_USERS);

  const { users, list } = state;
  const _id = currentUser._id
  const item = currentUser
  console.log(list)



  const addToList = () => {
    const itemInList = list.find((listItem) => listItem._id === currentUser._id)
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
      _id: currentUser._id
    });
  
    // upon removal from list, delete the item from IndexedDB using the `currentProduct._id` to locate what to remove
    idbPromise('list', 'delete', { ...currentUser });
  };

  useEffect(() => {
    // already in global store
    if (data?.users.length) {
      setCurrentUser(data?.users.find(user => user._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        users: data?.users
      });
  
      data.users.forEach((user) => {
        idbPromise('users', 'put', user);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('users', 'get').then((indexedUsers) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          users: indexedUsers
        });
      });
    }
  }, [users, data, loading, dispatch, id]);


  return (
    <>
      {currentUser ? (
        <div className="container my-1">
          <Link to="/">
            ← Back to Streamers
          </Link>
          <div className = "detail-video video-row">
            <div>
          <ReactPlayer
        url={`https://www.twitch.tv/${currentUser.twitchUserName}`}
        playing = {false}
        muted = {true}
        width = {"750px"}
        height = {"400px"}
      />
      </div>
      </div>

          <h2>{currentUser.name}</h2>

          <p>
            {currentUser.description}
          </p>

          <p>
            <strong>Twitch Streamer:</strong>
            {currentUser.twitchUserName}
            {" "}
            <div className="button_cont">
              <button class="example_a" onClick={addToList} rel="nofollow noopener">Add to Watch List</button>
              <button 
              disabled={!list.find(p => p._id === currentUser._id)}
              onClick={removeFromList}
              class="example_a" 
              rel="nofollow noopener">Remove From Watch List
              </button>
              </div>
          </p>
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
