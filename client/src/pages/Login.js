import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "./Home";
import LoginForm from "../components/LoginForm";
function Login(props) {
  return (
    <Container style={{ rowGap: 0, padding: 0 }}>
      <LoginContainer>
        <LoginForm></LoginForm>
        <div className="login-art">
          <img
            src="https://cdn2.iconfinder.com/data/icons/handyman-repairman-technician/286/worker-action-12-512.png"
            alt="login clip art"
          ></img>
        </div>
      </LoginContainer>
    </Container>
  );
}

const LoginContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  margin: 5em 0;
  border: solid slategrey 1.5px;
  box-shadow: 0 3px 3px slategrey;
  width: 80vw;
  height: 65vh;
  overflow: hidden;
  border-radius: 10px;
  h3 {
    flex: 1 1 100%;
    height: fit-content;
    padding: 0.25em;
  }
  form,
  .login-art {
    /* padding: 1em; */
  }
  .login-art {
    flex: 1 1 60%;
    display: flex;
    background-color: #1976d2;
    justify-content: center;
    align-items: center;
  }

  .signUp-btn {
    text-decoration: none;
    color: #1976d2;
  }
`;
export default Login;
