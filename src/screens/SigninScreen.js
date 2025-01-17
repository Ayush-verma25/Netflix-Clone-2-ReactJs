import React, { createRef } from "react";
import "./SignupScreen.css";
import { auth } from "../flrebase";

function SignupScreen() {
  const emailRef = createRef(null);
  const passwordRef = createRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email Address" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          SIGN IN
        </button>

        <h4>
          <span className="signupScreen__gray"> New to Netflix? </span>
          <samp className="signupScreen__link" onClick={register}>
            {" "}
            Sign Up now.
          </samp>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
