import React from 'react';
import styled from "@emotion/styled";

const ImageStyled = styled.img`
    max-height: 40vh;
    max-width: 60%;
    ${(props: {isHero?: boolean}) => props.isHero ? '' : 'width: 20em;'}
`;

export type ImageData = {
    src?: string,
    alt?: string,
    isHero?: boolean,
}

export const SectionImageComponent = ({src, alt, isHero = false}: ImageData) => {
    return <ImageStyled
        isHero={isHero}
        alt={alt ?? ''}
        src={src ?? ''}
        className="d-md-inline-block"
    />
}
