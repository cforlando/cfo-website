import React from 'react';
import './utilities/styling/styled-theme-provider/global.styles.scss';
import {StyledComponentsProvider, ScrollingProvider, ScrollingAnchor} from './utilities';
import {HomePage} from './pages';
import {HeaderNavComponent} from "./components/header-nav";
import {FooterComponent} from "./sections/footer";

/**
 * Currently a Single Page App (SPA) that has a few sections
 * @constructor
 */
function App() {
    return (
        <StyledComponentsProvider>
            <ScrollingProvider>
                <ScrollingAnchor anchorId={'home'} /> {/* clever way to get around local anchor linking */}
                <HeaderNavComponent />
                <HomePage />
                <FooterComponent />
            </ScrollingProvider>
        </StyledComponentsProvider>
    );
}

export default App;
