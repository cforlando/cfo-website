import React from 'react';
import styled from "@emotion/styled";

const ImageStyled = styled.img`
    max-height: 40vh;
    max-width: 60%;
    min-height: 20em;
    ${(props: {isHero?: boolean}) => props.isHero ? '' : 'min-width: 20em; '}
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
        className="section-image d-md-inline-block"
    />
}
