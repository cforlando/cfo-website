import React, {useRef} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {useScrollingAnchor} from "../../utilities";
import {BgImage, BgImageLg, SectionStyled} from "./about.styles";

export const AboutSection = () => {
    const ref = useRef(null);
    useScrollingAnchor('about', ref);

    const halfWidth = {
        span: 6,
        offset: 1,
    };
    const fullWidth = {
        span: 10,
        offset: 1,
    };

    return <SectionStyled id={'about'} ref={ref} className={'about-us d-flex align-items-start position-relative'}>
        <BgImage className={'bg-image d-block d-lg-none'} src={'/ribbons-bg.svg'} />
        <BgImageLg className={'d-none d-lg-block'} src={'/ribbons-bg.svg'} />
        <div className={'position-relative flex-grow-1'}>
            <Container>
                <h2>ABOUT US</h2>
                <Row>
                    <Col
                        xs={fullWidth}
                        sm={fullWidth}
                        md={fullWidth}
                        lg={halfWidth}
                        xl={halfWidth}
                    >
                        <p>
                            Code for Orlando, a local Code for America brigade, brings the community together to improve
                            Orlando through technology. We unite to improve the way residents
                            and local government experience Orlando.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    </SectionStyled>
}
