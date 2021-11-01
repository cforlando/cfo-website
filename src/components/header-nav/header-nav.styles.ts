import {Nav, Navbar} from "react-bootstrap";
import styled from "@emotion/styled";
import {css} from "@emotion/react";

export const NavbarStyled = styled(Navbar)`
  background-color: var(--bs-white)
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
  font-weight: 500;
  
  &:not(.active) {
    color: var(--bs-gray-100) !important;
  }
  
  &.active {
    color: var(--bs-gray-dark) !important;
  }
`
export const LogoStyled = styled.img`
  padding: 0 0 0.5em;
  height: 100%;
  width: auto;
  max-height: 5em;
`;
