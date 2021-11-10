import styled from "@emotion/styled";
import {Button} from "react-bootstrap";

export const SectionStyled = styled.section`
  min-height: 50vh;
  color: var(--bs-white);
  z-index: 1;
  position: relative;
  margin-bottom: 4em;
  background: transparent;
  background: linear-gradient(0deg, rgba(151,176,242,1) 0%, rgba(151,176,242,1) 49%, rgba(151,176,242,0) 50%, rgba(151,176,242,0) 100%);
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
