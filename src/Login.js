import React from 'react'
import "./Login.css"
import { Button } from '@mui/material'
import { auth, provider } from "./firebase";
// import provider from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";


function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        //sign in..
        auth.signInWithPopup(provider)
        .then(result => {

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            // console.log(result);
        })
        .catch((error) => alert(error.message))
    }
    
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png" alt="" />
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="" />
                <Button className="button" type="submit" onClick={signIn}>
                    Sign In
                </Button>
            </div>
        </div>
    )
}

export default Login
