import styled from "@emotion/styled";

export const ImageStyled = styled.img`
    max-height: 40vh;
    ${(props: {isHero?: boolean}) => props.isHero ? '' : 'max-width: 60%;'}
    height: auto;
    ${(props: {isHero?: boolean}) => props.isHero ? '' : 'width: 20em; '}
`;

export type ImageData = {
    direction?: 'right' | 'left';
    src?: string;
    alt?: string;
    backgrounds?: string[];
}
