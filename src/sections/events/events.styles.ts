import styled from "@emotion/styled";
import {ImageLeftComponent} from "../../components";
import {Button} from "react-bootstrap";

export const ContentStyled = styled(ImageLeftComponent)`
  height: 50vh;
  min-height: 30em;
  position: relative;
  z-index: 1;
  color: var(--bs-secondary);
`;

export const SectionStyled = styled.section`
  color: var(--bs-white);
  z-index: 1;
  position: relative;
  margin-bottom: 5em;
`;

export const SectionBg = styled.div`
  position: absolute;
  z-index: -2;
  width: 180%;
  left: -40%;
  height: 120%;
  top: -10%;
  background: linear-gradient(0deg, rgba(245,178,49,1) 0%, rgba(242,148,37,1) 100%);
  border-radius: 50% / 40%;
  overflow: hidden;
  
  &:before {
    width: 100%;
    height: 100%;
    position: absolute;
    content: '';
    z-index: -1;
    background-color: var(--bs-primary);
    background: linear-gradient(0deg, rgba(242,148,37,1) 0%, rgba(244,163,43,0.17689082468925066) 20%, rgba(245,178,49,0.12647065662202384) 80%, rgba(245,178,49,1) 100%);
    mask-image: url(halftone.svg);
    mask-mode: luminance;
  }
`

export const FloatingLeaf = styled.img`
  position: absolute;
  z-index: -3;
  width: 30vw;
  max-width: 30em;
  height: auto;
  left: 3vw;
  top: -26%;
  opacity: 0.2;
`;

export const ButtonImage = styled.img`
  margin-right: 0.25em;
  height: 100%;
  padding: 0.2em;
  display: inline-block;
`;

export const ButtonStyled = styled(Button)`
  font-weight: bold;
`;

export const FloatingIconBg = styled.img`
  position: absolute;
  max-width: 80vw;
  height: 90%;
  left: -15vw;
  top: -5%;
  opacity: 0.2;
  color: var(--bs-white);
`;
