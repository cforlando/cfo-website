
import {Col, Row, Container} from "react-bootstrap";
import styled from "@emotion/styled";

export const PartnersContainerStyled = styled(Container)`
    min-height: 40vh;
`;

export const PartnerImageStyled = styled.img`
  height: 100%;
  max-height: 20vh;
  max-width: 100%;
`;

export const PartnerDescriptionRow = styled(Row)`
    margin-bottom: 15vh;
`;

export const PartnerImageCol = styled(Col)`
  margin-top: 5vh;
  margin-bottom: 35vh;
`;

export const SectionStyled = styled.section`
  min-height: 90vh;
  background-color: var(--bs-bg-secondary-3);
  padding-top: 10vh;
  color: var(--bs-white);
  overflow: hidden;
  z-index: 0;
`;

export const BgImage = styled.img`
  position: absolute;
  top: 50%;
  width: 70%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: -1;
`;

export const PartnerSubtext = styled.div`
  color: var(--bs-gray-300);
`;
