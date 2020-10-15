import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import {QUERY_USER} from "../utils/queries";
import { useQuery } from '@apollo/react-hooks';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
function Profile() {
  const classes = useStyles();
  const { data: userData } = useQuery(QUERY_USER);
  const user = userData?.user || {};
  useEffect(()=> {
    console.log(user)
  })
  return (
    <div className="container my-1">
      <Link to="/">
        ← Go to Home
      </Link>

      <h2>Profile Page</h2>
      {/* <form onSubmit={handleFormSubmit}> */}
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
        <p>
          <u>Twitch Username:</u> {user.twitchUserName}
        </p>
        </div>
        <div className="flex-row">
          <p>**More features coming soon!**</p>
        </div>
    </div>
  )
}
export default Profile