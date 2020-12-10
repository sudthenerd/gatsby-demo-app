import React from 'react';
import { navigate } from 'gatsby';

import Header from '../components/Header';

const Test = () => {

    const navigateToHomePage = () => {
        navigate('/');
    }

    return (
        <>
            <Header title={'Header of test page'}/>
            <h1>This is a test page!</h1>
            <h1>This is a test page2!</h1>
            <button onClick={navigateToHomePage}>
                Navigate To Homepage
            </button>
        </>
    )
}

export default Test;
