import {Nav, Navbar} from "react-bootstrap";
import styled from "@emotion/styled";
import {css} from "@emotion/react";
import React from "react";

export const NavbarStyled = styled(Navbar)`
  background-color: var(--bs-primary)
`;
export const NavbarToggleStyled = styled(Navbar.Toggle)`
  color: var(--bs-white);
  
  :focus {
    color: var(--bs-white);
  }
`;
export const NavStyled = styled(Nav)`
  width: 100%;
  max-width: 20em;
`;
export const NavLinkStyles = css`
  text-transform: uppercase;
  user-select: none;
  font-weight: 400;
  
  :not(.active) {
    color: var(--bs-gray-100) !important;
  }
  &.active {
    color: var(--bs-secondary) !important;
  }
`
export const LogoStyled = styled.img`
  padding: 0 0 0.5em;
  height: 4em;
  max-height: 100%;
  width: auto;
`;

export const NavbarBrandStyled = styled(Navbar.Brand)`
  cursor: pointer;
`;

const BorderWave = ({className}: {className?: string;}) => <svg className={className} fill={'rgb(243,139,0)'} width="100%" height="100%" viewBox="0 0 3001 111" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g transform="matrix(1,0,0,1,1000.04,-485.656)">
        <g transform="matrix(-1.49999,-0.00447284,0.00447284,-1.49999,1997.52,1396.1)">
            <path d="M0,535L30.3,537.8C60.7,540.7 121.3,546.3 182,547.7C242.7,549 303.3,546 363.8,545.5C424.3,545 484.7,547 545.2,543.7C605.7,540.3 666.3,531.7 727,532.8C787.7,534 848.3,545 909,547.3C969.7,549.7 1030.3,543.3 1091,538.8C1151.7,534.3 1212.3,531.7 1273,531C1333.7,530.3 1394.3,531.7 1454.8,532.8C1515.3,534 1575.7,535 1636.2,533.3C1696.7,531.7 1757.3,527.3 1818,528.2C1878.7,529 1939.3,535 1969.7,538L2000,541L2000,601L0,601L0,535Z"/>
        </g>
    </g>
</svg>;

export const BottomNavBarDetail = styled(BorderWave)`
  width: 100%;
  bottom: -2.5em;
  left: 0;
  z-index: -2;
`;
