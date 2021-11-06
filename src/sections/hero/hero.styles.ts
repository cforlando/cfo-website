import styled from "@emotion/styled";
import {ImageTextComponent} from "../../components";

export const ContentStyled = styled(ImageTextComponent)`
  height: 80vh;
  min-height: 30em;

  a {
    color: var(--bs-orange);
  }
`;

export const SectionStyled = styled.section`
  background-color: #f4f0e1;
  z-index: -3;
`;

export const FloatingIconBg = styled.img`
  position: absolute;
  max-width: 80vw;
  height: 90%;
  right: -3vw;
  top: -5%;
  opacity: 0.4;
  color: var(--bs-white);
  z-index: -2;
  mask-image: url('/halftone.svg');
  mask-mode: luminance;
`;

export const AnchorStyled = styled.a`
  font-weight: bold;
`;
