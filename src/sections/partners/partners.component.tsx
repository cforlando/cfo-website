import React from 'react';
import {Row} from "react-bootstrap";
import {
    PartnersContainerStyled,
    PartnerImageStyled,
    PartnerImageContainer,
    SectionStyled,
} from './partners.styles';

export const PartnersComponent = () => {
    return <SectionStyled id={'partners'} className={'partners d-flex align-items-start position-relative'}>
        <PartnersContainerStyled>
            <h2>PARTNERS</h2>
            <Row>
                <PartnerImageContainer
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
                </PartnerImageContainer>
                <PartnerImageContainer
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
                </PartnerImageContainer>
            </Row>
        </PartnersContainerStyled>
    </SectionStyled>
}
