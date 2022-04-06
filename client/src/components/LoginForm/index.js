import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../../utils/mutations.js";

import Auth from "../../utils/auth.js";
import styled from "styled-components";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import GoogleSignIn from "./GoogleSignIn";

export default function LoginForm() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      }).catch((err) => {
        alert("Invalid data entry");
        return;
      });
      const token = data.login.token;
      Auth.login(token);
      if (Auth.getProfile().data.email) {
        console.log(Auth.getProfile().data);
        const userId = data.login.user._id;
        window.location.replace(`/profiles/${userId}`);
      } else {
        window.location.replace("/login");
      }
    } catch (e) {
      console.log(e);
    }

    setFormState({
      email: "",
      password: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <LoginFormWrapper onSubmit={handleFormSubmit}>
      <h3>Sign In to getTraded</h3>
      <GoogleSignIn></GoogleSignIn>
      <div id="login-divider">
        <hr></hr>
        <p>or sign in with email</p>
      </div>
      <div className="flex-row space-between my-2">
        <input
          placeholder="Email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
          id="email"
        />
      </div>
      <div className="  flex-row space-between my-2">
        <input
          placeholder="Password"
          name="password"
          type="password"
          value={formState.password}
          id="pwd"
          onChange={handleChange}
        />
      </div>
      {/* {error ? (
            <div>
              <p className="error-text">The provided credentials are incorrect</p>
            </div>
          ) : null} */}
      <div className="flex-row flex-end">
        <button type="submit">
          <ExitToAppIcon /> Sign In
        </button>
      </div>
      <p>
        Don't have an account?{" "}
        <Link to="/signup" className="signUp-btn">
          Sign-up
        </Link>
      </p>
    </LoginFormWrapper>
  );
}

export const LoginFormWrapper = styled.form`
  height: 90%;
  flex: 1 1 30%;
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    padding: 1em;
    row-gap: 1em;

    input,
    button {
      padding: 0.5em;
      justify-self: center;
      width: 70%;
      align-self: center;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #1976d2;
      color: white;
      border: solid slategrey 1.5px;
      border-radius: 5px;
      font-weight: 700;
      cursor: pointer;
    }
    input {
      border: solid 3px slategrey;
      border-radius: 5px;
    }
    input::placeholder {
      font-weight: 700;
    }
  }
  #login-divider {
    color: silver;
    p {
      margin-top: -1.75em;
      color: slategrey;
    }
  }
`;
