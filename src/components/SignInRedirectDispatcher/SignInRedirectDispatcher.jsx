import React, { useEffect } from 'react';
import { UserManager } from "oidc-client";
import { WebStorageStateStore } from "oidc-client";



const SignInRedirectDispatcher = ({dispatch}) => {
    const urlPath = window.location.pathname;

    useEffect(() => {
        if (!window.location.hash.includes("#id_token")) {
            invokeSignInRedirect();
        } else {
            userManager
        .signinRedirectCallback()
        .then((user) => {
          localStorage.setItem('authInfo', JSON.stringify(user))
          localStorage.setItem('accessToken', user.access_token)
          localStorage.setItem('idToken', user.id_token)
          localStorage.setItem('profile', JSON.stringify(user.profile) )
        //   onAuthSignInCallBack(dispatch, user);
        })
        .catch((err) => {
          Promise.resolve('/');
        });

        }
    }, [])

    const invokeSignInRedirect = () => {
        userManager.signinRedirect().then((res) => {
            console.log('res',res)
        }).catch((err) => {
            console.log('err',err)
        })
    }

    return (
        <></>
    )
}

export default SignInRedirectDispatcher;
