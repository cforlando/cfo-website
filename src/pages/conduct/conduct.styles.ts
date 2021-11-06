import styled from "@emotion/styled";
import {Container} from "react-bootstrap";

export const MarkDownContainerStyled = styled(Container)`
  padding-top: 2em;
  padding-bottom: 5em;
  
  h1,h2,h3,h4 {
    margin-top: 2.5em;
    margin-bottom: 1.5em;
    padding-left: 0.5em;
    position: relative;
    
    &:before {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 0.25em;
      border-radius: 0.1em;
    }
    
    &:nth-of-type(4n - 3):before{
      content: '';
      background-color: #006152;
    }
    &:nth-of-type(4n - 2):before{
      content: '';
      background-color: #f7b334;
    }
    &:nth-of-type(4n - 1):before{
      content: '';
      background-color: #97b0f2;
    }
    &:nth-of-type(4n):before{
      content: '';
      background-color: #333333;
    }
  }
  
  
`;

export const ConductImageStyled = styled.img<{isFirst?: boolean; isLast?: boolean; isOdd?: boolean}>`
  height: 20vh;
  max-height: 20vh;

  margin-top: ${(props) => props.isFirst ? '5em' : '0'};
  margin-bottom: ${(props) => props.isLast ? '0' : '10em'};

  padding-${props => props.isOdd ? 'right' : 'left'}: 3em;
`;
