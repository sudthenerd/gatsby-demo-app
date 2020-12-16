import React, {useState, useRef} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'gatsby';
import { useAuth0 } from "@auth0/auth0-react";
import { withAuth0 } from '@auth0/auth0-react';

//Note: npm install gatsby-image

let refCurrent = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : '';

const Header = (props) => {
    const [key, setKey] = useState(() => '');

    const { loginWithRedirect, logout, isLoading, isAuthenticated  } = useAuth0();
    const { user } = props.auth0;

    React.useEffect(() => {
        const queryParamIndex = window.location.href.indexOf('code');

        if(!localStorage.getItem('token') && queryParamIndex >= 0) {
            const hash = window.location.href.slice(queryParamIndex + 5);
            localStorage.setItem('token',hash);
            setKey(hash);
            refCurrent = hash || '';
            window.location.href.indexOf(localStorage.getItem('token')) >= 0 && window.location.replace('/');
        }
    }, [isLoading, isAuthenticated, user, key]);

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Gatsby-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto w-100">
                        {
                            (refCurrent || key) ?
                            <>
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                                <Nav.Link as={Link} to="/users">Users</Nav.Link>
                                <Nav.Link as={Link} to="/userStatic">Users Static</Nav.Link>
                                <Nav.Link as={Link} to="/pokemon">Pokemon</Nav.Link>
                                <Nav.Link className="ml-auto">
                                    <button onClick={() => {
                                        localStorage.clear();
                                        setKey(null);
                                        refCurrent = '';
                                        return logout({returnTo: window.location.origin});
                                    }}>
                                        Log Out
                                    </button>
                                </Nav.Link>
                            </> :
                            <Nav.Link className="ml-auto">
                                <button onClick={() => {
                                    if(localStorage.getItem('token')) {
                                        localStorage.clear();
                                        logout({returnTo: window.location.origin}); 
                                        setKey(null);
                                        refCurrent = '';
                                        // loginWithRedirect({returnTo: window.location.origin});

                                    } else {
                                        loginWithRedirect({returnTo: window.location.origin})
                                    }
                                }}>
                                    Log In
                                </button>
                            </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default withAuth0(Header);
