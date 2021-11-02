
import {Col, Container} from "react-bootstrap";
import styled from "@emotion/styled";

export const PartnersContainerStyled = styled(Container)`
    min-height: 40vh;
  
    h2 {
      margin-bottom: 1em;
    }
`;

export const PartnerImageStyled = styled.img`
    height: 100%;
    max-height: 20vh;
`;

export const PartnerImageContainer = styled(Col)`
  margin-top: 5vh;
  margin-bottom: 5vh;
`;

export const SectionStyled = styled.section`
  height: 60vh;
`;
