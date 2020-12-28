import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { provider, auth } from '../../firebase'; 
import { actionTypes } from '../../ContextApi/reducer';
import { useStateValue } from '../../ContextApi/provider';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(res => dispatch({
            type: actionTypes.SET_USER,
            user: res.user
        }))
        .catch(err => alert(err.message))
    }
    return (
        <div className='login'>
            <div className='login__logo'>
                <img src='https://cdn4.iconfinder.com/data/icons/social-icon-4/842/facebook-512.png' alt=''/>
                <img src='https://www.g4f-records.com/wp-content/uploads/2016/09/logo-facebook.png' alt=''/>
            </div>
            <Button type='submit' onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
