import React from 'react';

import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Container, Navbar, Nav} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {AppRouter} from "./components/AppRouter";

export const App = () => {

    return (
        <BrowserRouter>

            <Navbar bg="dark" variant="dark">

                <Container>
                    <Nav>

                        <Navbar.Brand>Example App</Navbar.Brand>

                        <LinkContainer to="Config">
                            <Nav.Link>Config</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="Orders">
                            <Nav.Link>Orders</Nav.Link>
                        </LinkContainer>

                        /* ... more nav links ... */

                    </Nav>
                </Container>

            </Navbar>

            <AppRouter/>

        </BrowserRouter>

    );

}

export default App;
