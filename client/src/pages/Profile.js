import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
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
        <div className="flex-row space-between my-2">
          <p>First Name: {user.firstName}</p>
        </div>
        <div className="flex-row space-between my-2">
          <p>Last Name: {user.lastName}</p>
        </div>
        <div className="flex-row space-between my-2">
        <p>Twitch Username: {user.twitchUserName}</p>
        </div>
    </div>
  // return (
  //   <div className="container">
  //     <form className={classes.root} noValidate autoComplete="off">
  //       <div>
  //         <TextField
  //           required
  //           id="outlined-required"
  //           label="Required"
  //           defaultValue="Placeholder Username"
  //           variant="outlined"
  //         />
  //         <TextField
  //           disabled
  //           id="outlined-disabled"
  //           label="Disabled"
  //           defaultValue="Hello World"
  //           variant="outlined"
  //         />
  //         <TextField
  //           id="outlined-password-input"
  //           label="Password"
  //           type="password"
  //           autoComplete="current-password"
  //           variant="outlined"
  //         />
  //         <TextField
  //           id="outlined-read-only-input"
  //           label="Read Only"
  //           defaultValue="Do we need a read only text box?"
  //           InputProps={{
  //             readOnly: true,
  //           }}
  //           variant="outlined"
  //         />
  //         <TextField
  //           id="outlined-number"
  //           label="Number"
  //           type="number"
  //           InputLabelProps={{
  //             shrink: true,
  //           }}
  //           variant="outlined"
  //         />
  //         <TextField id="outlined-search" label="Search field" type="search" variant="outlined" />
  //         <TextField
  //           id="outlined-helperText"
  //           label="Helper text"
  //           defaultValue="Default Value"
  //           helperText="Some important text"
  //           variant="outlined"
  //         />
  //       </div>
  //     </form>
  //   </div>
  )
}
export default Profile