import React from "react";
import { GoogleLogin } from "react-google-login";

export default function GoogleSignIn() {
  const successGoogle = () => {
    alert("it worked");
  };
  const failureGoogle = () => {
    alert("it failed");
  };
  return (
    <GoogleLogin
      clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
      buttonText="Sign In with Google"
      // onSuccess={() => successGoogle()}
      // onFailure={() => failureGoogle()}
      cookiePolicy={"single_host_origin"}
    />
  );
}
