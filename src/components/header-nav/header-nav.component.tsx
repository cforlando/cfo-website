/** @jsxImportSource @emotion/react */
import {Container, Nav, Navbar} from "react-bootstrap";
import React, {RefObject, useCallback, useRef, useState} from "react";
import {LogoStyled, NavbarToggleStyled, NavStyled, NavLinkStyles, NavbarStyled, ImageStyled, ExternalLink} from './header-nav.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {ScrollingLink, useOnScreen} from "../../utilities";
import _ from 'lodash';

const Toggle = ({label = '', ariaControls, providedRef}: {label?: string; ariaControls: string, providedRef?: RefObject<any>}) => {
    const ref = providedRef ? providedRef : null; // default to a dummy 'null' ref
    const color = 'var(--bs-white)';

    return <NavbarToggleStyled onClick={_.noop} label={label} ref={ref} aria-controls={ariaControls} >
        <FontAwesomeIcon icon={faBars} color={color} />
    </NavbarToggleStyled>
}

export const HeaderNavComponent = () => {
    const [activeKey, setActiveKey] = useState('home');
    const menuToggleRef = useRef(null);
    const isMenuToggleVisible = useOnScreen(menuToggleRef);

    const toggleMenu = useCallback(() => {
        if (isMenuToggleVisible && menuToggleRef?.current) {
            (menuToggleRef.current as any).click();
        }
    }, [isMenuToggleVisible, menuToggleRef]);

    return <NavbarStyled sticky="top" bg="primary" expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <LogoStyled
                    alt="Code for Orlando logo - an outline of an orange fruit with html bracket symbols inside"
                    src="/logo.svg"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Toggle providedRef={menuToggleRef} label={'Simple menu toggle'} ariaControls={'responsive-navbar-nav'} />
            <Navbar.Collapse id="responsive-navbar-nav">
                <NavStyled
                    className="m-auto"
                    activeKey={activeKey}
                    onSelect={(selectedKey) => {
                        if (selectedKey !== 'external') {
                            setActiveKey((selectedKey ?? ''))
                        }
                    }}
                    justify
                >
                    <Nav.Item>
                        <ScrollingLink onClick={() => toggleMenu()} cssStyles={NavLinkStyles} toAnchor={'home'}>Home</ScrollingLink>
                    </Nav.Item>
                    <Nav.Item>
                        <ScrollingLink onClick={() => toggleMenu()} cssStyles={NavLinkStyles} toAnchor={'events'}>Events</ScrollingLink>
                    </Nav.Item>
                    <Nav.Item>
                        <ScrollingLink onClick={() => toggleMenu()} cssStyles={NavLinkStyles} toAnchor={'about'}>About</ScrollingLink>
                    </Nav.Item>
                    <Nav.Item>
                        <ScrollingLink onClick={() => toggleMenu()} cssStyles={NavLinkStyles} toAnchor={'contact'}>Contact</ScrollingLink>
                    </Nav.Item>
                    <Nav.Item>
                        <ExternalLink
                            className={'external d-flex justify-content-center'}
                            css={NavLinkStyles}
                            href={'https://github.com/cforlando/codeofconduct'}
                            rel={'roreferrer'}
                            target={'_blank'}
                            eventKey={'external'}
                        >
                            <div className={'d-inline-block position-relative'}>
                                <span>Conduct</span>
                                <ImageStyled alt={''} role={'presentation'} className={'px-1'} src={'/external-link.svg'} />
                            </div>
                        </ExternalLink>
                    </Nav.Item>
                </NavStyled>
            </Navbar.Collapse>
        </Container>
    </NavbarStyled>;
}
