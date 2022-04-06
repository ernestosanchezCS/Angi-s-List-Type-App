import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
// import AddBusiness from "./AddBusiness";
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";

import { LoginFormWrapper } from "../LoginForm/index";
import ExitToApp from "@mui/icons-material/ExitToApp";
export default function SignUp() {
  const [businessAdded, setBusinessAdded] = useState(false);
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        ...formState,
      },
    });

    const token = mutationResponse.data.addUser.token;
    Auth.login(token);

    if (Auth.getProfile().data.email) {
      const profileId = Auth.getProfile().data._id;
      window.location.replace(`profiles/${profileId}`);
    } else {
      alert("User already exists in our database");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  useEffect(() => {}, [businessAdded]);
  return (
    <LoginFormWrapper id="signup-wrapper" onClick={handleFormSubmit}>
      <h3>Sign up to getTraded</h3>
      {/* <GoogleSignIn></GoogleSignIn> */}

      <div id="signup-container">
        <div className="flex-row space-between my-2">
          <input
            placeholder="Full Name"
            name="fullName"
            type="text"
            id="fullName"
            value={formState.fullName}
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <input
            placeholder="Email"
            name="email"
            type="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
          />
        </div>

        <div className="  flex-row space-between my-2">
          <input
            placeholder="Password"
            name="password"
            type="password"
            id="pwd"
            value={formState.password}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* <div id="includeBusiness-wrapper">
        <label htmlFor="addBusiness">Would you like to add a business?</label>
        <input
          name="addBusiness"
          type="checkbox"
          id="addBusiness"
          onClick={(e) => setBusinessAdded(!businessAdded)}
        />
      </div>
      {businessAdded ? <AddBusiness></AddBusiness> : null} */}

      {/* {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null} */}
      <div className="flex-row flex-end">
        <button type="submit">
          <ExitToApp /> Sign Up
        </button>
      </div>
      <p>
        Already have an account?
        <Link to="/login" className="signUp-btn">
          Sign In
        </Link>
      </p>
    </LoginFormWrapper>
  );
}
