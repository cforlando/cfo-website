import {Nav, Navbar} from "react-bootstrap";
import styled from "@emotion/styled";
import {css} from "@emotion/react";

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
  
  :not(.external) {
    font-weight: 500;
  }
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

export const ImageStyled = styled.img`
  width: 1.8em;
  height: 1.8em;
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
`;

export const ExternalLink = styled(Nav.Link)`
  font-weight: 700;
`;
