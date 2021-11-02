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
