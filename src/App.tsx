import React from 'react';
import './utilities/styling/styled-theme-provider/global.styles.scss';
import {StyledComponentsProvider, ScrollingProvider, ScrollingAnchor} from './utilities';
import {HomePage} from './pages';
import {HeaderNavComponent} from "./components/header-nav";
import {FooterComponent} from "./sections/footer";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import {ConductPage} from "./pages/conduct";

/**
 * Currently a Single Page App (SPA) that has a few sections
 * @constructor
 */
function App() {
    return (
        <Router>
            <StyledComponentsProvider>
                <ScrollingProvider>
                    <ScrollingAnchor id={'home'} anchorId={'home'} /> {/* clever way to get around local anchor linking */}
                    <HeaderNavComponent />
                    <Routes> {/* The concept of 'pages' is really for the purpose of having one element in a <Route> */}
                        <Route path={'/'} element={<HomePage />} />
                        <Route path={'/conduct'} element={<ConductPage />} />
                    </Routes>
                    <FooterComponent />
                </ScrollingProvider>
            </StyledComponentsProvider>
        </Router>
    );
}

export default App;
