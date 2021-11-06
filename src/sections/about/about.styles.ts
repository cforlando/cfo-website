import styled from "@emotion/styled";

export const FloatingIconBg = styled.img`
  position: absolute;
  max-width: 30em;
  max-height: 90%;
  right: -5vw;
  top: -10%;
  opacity: 0.2;
  color: var(--bs-white);
`;

export const BgWatermark = styled.img`
  position: absolute;
  max-width: 85vw;
  width: 85vw;
  left: 50%;
  top: -20%;
  transform: translateX(-50%);
  opacity: 0.2;
`;

export const SectionStyled = styled.section`
  height: 70vh;
  margin-top: 30vh;
`;

export const BgImage = styled.img`
  position: absolute;
  width: 250%;
  left: -35%;
  top: 50%;
  transform: translateY(-60%);
  z-index: -1;
`;

export const BgImageLg = styled.img`
  position: absolute;
  width: 130%;
  left: -15%;
  top: -60%;
`;
