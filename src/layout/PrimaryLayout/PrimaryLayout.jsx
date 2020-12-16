import React from 'react';
import { Auth0Provider } from "@auth0/auth0-react";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

const PrimaryLayout = (props) => {
    return (
        <>
            <Auth0Provider
                domain="dev-fjw594xm.us.auth0.com"
                clientId="DfzO1loBN3520D6yKOZ1FblexK2htPei"
                redirectUri={'http://localhost:9000'}
            >
                <div>
                    <SEO />
                    <Header />
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className={props.column}>
                                {props.children}
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </Auth0Provider>
        </>
    )
}

export default PrimaryLayout;
