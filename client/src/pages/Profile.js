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
          <p>{user.lastName}</p>
          <p>{user.firstName}</p>
          <p>{user.twitchUserName}</p>
        {/* <p>{item.name}</p>
        <p>{name}</p>
        <p>{firstName}</p>
        <p>{lastName}</p> */}
          <label htmlFor="firstName">First Name*:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            // onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName">Last Name*:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            // onChange={handleChange}
          />
        </div>

        <div className="flex-row space-between my-2">
          <label htmlFor="userName">Username*:</label>
          <input
            placeholder="Username"
            name="userName"
            type="userName"
            id="userName"
            // onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="twitchUserName">Twitch Username:</label>
          <input
            placeholder="Twitch Username"
            name="twitchUserName"
            type="twitchUserName"
            id="twitchUserName"
            // onChange={handleChange}
          />
        </div>

        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email*:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            // onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password*:</label>
          <input
            placeholder="Password"
            name="password"
            type="password"
            id="pwd"
            // onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">
            Submit
          </button>
        </div>
      {/* </form> */}
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