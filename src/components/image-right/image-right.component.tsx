import React from 'react';
import {Row, Col} from "react-bootstrap";
import {SectionImageComponent} from "../section-image";
import {SectionWithImage} from "../common";

export const ImageRightComponent = ({imageData, children, className, isHero = false}: SectionWithImage) => {
    const leftWide = {
        span: 6,
        offset: 0,
    };
    const leftNarrow = isHero ? {
        span: 7,
        offset: 1,
    } : {
        span: 10,
        offset: 1,
    };
    const rightWide = {
        span: 6,
        offset: 0,
    };
    return <Row className={`py-4 position-relative justify-content-md-center ${className}`}>
        <Col
            md={leftWide}
            sm={leftNarrow}
            xs={leftNarrow}
        >
            {children}
        </Col>
        <Col
            xs={rightWide}
            className={'justify-content-center d-md-flex'}>
            <SectionImageComponent isHero={isHero} src={imageData?.src} alt={imageData?.alt} />
        </Col>
    </Row>
}
