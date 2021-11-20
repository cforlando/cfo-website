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
  z-index: 1;
`;

export const AnchorStyled = styled.a`
  font-weight: bold;
`;
