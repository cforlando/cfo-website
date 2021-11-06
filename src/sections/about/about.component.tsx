import React, {useRef} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {useScrollingAnchor} from "../../utilities";
import {BgImage, BgImageLg, SectionStyled} from "./about.styles";

export const AboutSection = () => {
    const ref = useRef(null);
    useScrollingAnchor('about', ref);

    const halfWidth = {
        span: 6,
        offset: 0,
    };
    const fullWidth = {
        span: 10,
        offset: 1,
    };

    return <SectionStyled id={'about'} ref={ref} className={'about-us d-flex align-items-start position-relative'}>
        <BgImageLg className={'d-none d-lg-block'} src={'/banded-blobs.svg'} />
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
                            Orlando through technology. We are a group of “civic hackers” from various disciplines who are
                            committed to volunteering our talents to make a difference. We unite to improve the way residents
                            and local government experience Orlando.
                        </p>
                    </Col>
                </Row>
                <BgImage className={'d-block d-lg-none d-xl-none'} src={'/banded-blobs.svg'} />
            </Container>
        </div>
    </SectionStyled>
}
