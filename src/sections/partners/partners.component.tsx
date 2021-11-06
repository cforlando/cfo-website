import React from 'react';
import {Col, Row} from "react-bootstrap";
import {
    PartnersContainerStyled,
    PartnerImageStyled,
    PartnerImageCol,
    SectionStyled,
} from './partners.styles';

export const PartnersComponent = () => {

    const halfWidth = {
        span: 6,
        offset: 0,
    };
    const fullWidth = {
        span: 10,
        offset: 1,
    };

    return <SectionStyled id={'partners'} className={'partners d-flex align-items-start position-relative'}>
        <PartnersContainerStyled>
            <h2>PARTNERS</h2>
            <Row>
                <Col
                    xs={fullWidth}
                    sm={fullWidth}
                    md={fullWidth}
                    lg={halfWidth}
                    xl={halfWidth}
                >
                    <p>
                        Thank you to our partners that support our brigade operations. We are able to engage with our
                        community through logistical and financial backing for necessary resources.
                    </p>
                </Col>
            </Row>
            <Row>
                <PartnerImageCol
                    className={'px-5'}
                    md={{
                        span: 6,
                    }}
                    xs={{
                        span: 12,
                    }}
                >
                    <PartnerImageStyled
                        src={'/code_for_america.svg'}
                        alt={'Code for America'}
                    />
                </PartnerImageCol>
                <PartnerImageCol
                    className={'px-5'}
                    md={{
                        span: 6,
                    }}
                    xs={{
                        span: 12,
                    }}
                >
                    <PartnerImageStyled
                        src={'/recipebox-orange-gradient.svg'}
                        alt={'RecipeBox'}
                    />
                </PartnerImageCol>
            </Row>
        </PartnersContainerStyled>
    </SectionStyled>
}
