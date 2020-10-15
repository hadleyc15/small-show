import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import {QUERY_USER} from "../utils/queries";
import { useQuery } from '@apollo/react-hooks';

function Profile() {
  const { data: userData } = useQuery(QUERY_USER);
  const user = userData?.user || {};
  console.log(user)

  function twitchName(props) {
    if (user.twitchUserName) { 
      return (       
        <p>
        <u>Twitch Username:</u> {user.twitchUserName}
      </p>
        )
    }
  }
  
  useEffect(()=> {
  })
  return (
    <div className="container my-1">
      <Link to="/">
        ← Go to Home
      </Link>

      <h2>Profile Page</h2>
        <div className="flex-row">
          <p>
            <u>First Name:</u> {user.firstName}
          </p>
        </div>
        <div className="flex-row">
          <p>
            <u>Last Name:</u> {user.lastName}
          </p>
        </div>
        <div className="flex-row">
          {twitchName()}
        {/* <p>
          <u>Twitch Username:</u> {user.twitchUserName}
        </p> */}
        </div>
        <div className="flex-row">
          <p>**More features coming soon!**</p>
        </div>
    </div>
  )
}
export default Profile