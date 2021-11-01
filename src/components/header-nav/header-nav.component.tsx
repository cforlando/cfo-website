import {Container, Nav, Navbar} from "react-bootstrap";
import React, {useState} from "react";
import {LogoStyled, NavbarToggleStyled, NavStyled, NavLinkStyles, NavbarStyled} from './header-nav.styles';
import {ScrollingLink} from '../../utilities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Toggle = ({ariaControls}: {ariaControls: string}) => {
    const [isToggled, setIsToggled] = useState(false);

    const color = 'var(--bs-white)';

    return <NavbarToggleStyled color={color} onClick={() => setIsToggled(!isToggled)} aria-controls={ariaControls} >
        <FontAwesomeIcon icon={faBars} color={color} />
    </NavbarToggleStyled>
}

export const HeaderNavComponent = () => {
    const [activeKey, setActiveKey] = useState('home');

    return <NavbarStyled sticky="top" bg="primary" expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <LogoStyled
                    alt="Code for Orlando logo - an outline of an orange fruit with html bracket symbols inside"
                    src="/logo.svg"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Toggle ariaControls={'responsive-navbar-nav'} />
            <Navbar.Collapse id="responsive-navbar-nav">
                <NavStyled
                    className="m-auto"
                    activeKey={activeKey}
                    onSelect={(selectedKey) => setActiveKey((selectedKey ?? '') as string)}
                    justify
                >
                    <Nav.Item>
                        <ScrollingLink cssStyles={NavLinkStyles} toAnchor={'home'} >Home</ScrollingLink>
                    </Nav.Item>
                    <Nav.Item>
                        <ScrollingLink cssStyles={NavLinkStyles} toAnchor={'events'} >Events</ScrollingLink>
                    </Nav.Item>
                    <Nav.Item>
                        <ScrollingLink cssStyles={NavLinkStyles} toAnchor={'about'} >About</ScrollingLink>
                    </Nav.Item>
                    <Nav.Item>
                        <ScrollingLink cssStyles={NavLinkStyles} toAnchor={'contact'} >Contact</ScrollingLink>
                    </Nav.Item>
                </NavStyled>
            </Navbar.Collapse>
        </Container>
    </NavbarStyled>;
}
