import React from 'react';
import {Row, Col} from "react-bootstrap";
import {SectionImageComponent} from "../section-image";
import {SectionWithImage} from "../common";
import _ from "lodash";

export const ImageLeftComponent = ({imageData, children, className}: SectionWithImage) => {
    const isHero = _.toLower(className)?.indexOf('hero') > 0;
    const rightWide = {
        span: 6,
        offset: 0,
    };
    const rightNarrow = isHero ? {
        span: 7,
        offset: 1,
    } : {
        span: 10,
        offset: 1,
    };
    const leftWide = {
        span: 6,
        offset: 0,
    };
    return <Row className={`justify-content-md-center ${className}`}>
        <Col xs={leftWide} className={'d-lg-flex justify-content-center'}>
            <SectionImageComponent isHero={isHero} src={imageData?.src} alt={imageData?.alt} />
        </Col>
        <Col
            md={rightWide}
            sm={rightNarrow}
            xs={rightNarrow}
        >
            {children}
        </Col>
    </Row>
}
