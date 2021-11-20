import React, {useRef} from 'react';
import {Col, Row} from "react-bootstrap";
import {
    PartnersContainerStyled,
    PartnerImageStyled,
    PartnerImageCol,
    SectionStyled,
    BgImage, PartnerDescriptionRow, PartnerSubtext
} from './partners.styles';
import {useScrollingAnchor} from "../../utilities";

export const PartnersComponent = () => {
    const ref = useRef(null);
    useScrollingAnchor('partners', ref);

    const halfWidth = {
        span: 6,
        offset: 0,
    };
    const fullWidth = {
        span: 10,
        offset: 1,
    };

    return <SectionStyled ref={ref} id={'partners'} className={'partners d-flex align-items-start position-relative'}>
        <PartnersContainerStyled>
            <h2>PARTNERS</h2>
            <PartnerDescriptionRow>
                <Col
                    xs={fullWidth}
                    sm={fullWidth}
                    md={fullWidth}
                    lg={halfWidth}
                    xl={halfWidth}
                >
                    <p>
                        Thank you to our partners that support our brigade operations. We are able to engage with our
                        community through their logistical and financial backing.
                    </p>
                </Col>
            </PartnerDescriptionRow>
            <Row>
                <PartnerImageCol
                    className={'position-relative px-5'}
                    md={{
                        span: 6,
                    }}
                    xs={{
                        span: 12,
                    }}
                >
                    <PartnerImageStyled
                        src={'/code_for_america-white.svg'}
                        alt={'Code for America'}
                    />
                    <PartnerSubtext className={'d-block d-md-none text-center'}>PARTNER</PartnerSubtext>
                    <BgImage alt={''} role={'presentation'} src={'/partner-blob-1.svg'} />
                </PartnerImageCol>
                <PartnerImageCol
                    className={'position-relative px-5'}
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
                    <PartnerSubtext className={'d-block d-md-none text-center'}>PARTNER</PartnerSubtext>
                    <BgImage alt={''} role={'presentation'} src={'/partner-blob-2.svg'} />
                </PartnerImageCol>
            </Row>
        </PartnersContainerStyled>
    </SectionStyled>
}
