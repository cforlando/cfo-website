import React, {useMemo} from 'react';
import {Row, Col} from "react-bootstrap";
import {ImageStyled} from "../section-image";
import {SectionWithImage} from "../common";
import styled from "@emotion/styled";
import _ from 'lodash';

const BgImage = styled.img`
  position: absolute;
  top: 50%;
  transform: translatey(-50%);
  width: 100%;
  max-height: 100%;
  z-index: -1;
`;

export const ImageTextComponent = ({
        imageData: {
            src = '',
            alt = '',
            backgrounds = [],
        },
        children,
        className,
        isHero = false,
    }: SectionWithImage) => {
    const leftNarrow = {
        span: 6,
    };
    const leftWide = {
        span: 7,
    };
    const rightNarrow = {
        span: 5,
    };
    const rightWide = {
        span: 6,
    };

    const bgImages = useMemo(() => {
        return _.map(backgrounds, _imgSrc => {
            return <BgImage className={'d-none d-md-block'} src={_imgSrc} alt={''} role={'presentation'} />
        })
    }, [backgrounds]);

    return <Row className={`py-4 position-relative justify-content-md-center ${className}`}>
        <Col
            md={leftNarrow}
            sm={leftWide}
            xs={leftWide}
        >
            {children}
        </Col>
        <Col
            md={rightWide}
            sm={rightNarrow}
            xs={rightNarrow}
            className={'position-relative justify-content-center d-md-flex'}>
            {!_.isEmpty(backgrounds) && bgImages}
            {!_.isEmpty(src) && <ImageStyled
                isHero={isHero}
                alt={alt ?? ''}
                src={src ?? ''}
                className="section-image d-md-inline-block"
            />}
        </Col>
    </Row>
}
