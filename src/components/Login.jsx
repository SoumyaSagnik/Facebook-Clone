import { Button } from "@mui/material";
import "../css/Login.css";
import { auth, provider } from "../Firebase.js";
import { signInWithPopup } from "firebase/auth";
import { useStateValue } from "../store/StateProvider";
import { actionTypes } from "../store/Reducer";

const Login = () => {
  const [state, dispatch] = useStateValue();
  function signIn() {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => console.log(error.message));
  }
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://raw.githubusercontent.com/SoumyaSagnik/Facebook-Clone/main/images/facebook-logo.png"
          alt="Facebook"
        />
      </div>
      <h1>facebook</h1>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
