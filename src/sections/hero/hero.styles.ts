import styled from "@emotion/styled";
import {ImageRightComponent} from "../../components";

export const ContentStyled = styled(ImageRightComponent)`
  height: 80vh;
  min-height: 30em;

  a {
    color: var(--bs-orange);
  }
`;

export const SectionStyled = styled.section`
  background: rgb(230,237,255);
  background: linear-gradient(0deg, rgba(230,237,255,1) 15%, rgba(255,255,255,1) 45%);
  z-index: -3;

  ::before {
    background-size: cover;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -3;
  }
`;

export const FloatingIconBg = styled.img`
  position: absolute;
  max-width: 80vw;
  height: 90%;
  right: -3vw;
  top: -5%;
  opacity: 0.2;
  color: var(--bs-white);
  z-index: -2;
`;

export const AnchorStyled = styled.a`
  font-weight: bold;
`;
