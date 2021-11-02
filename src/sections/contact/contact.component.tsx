import React, {useRef} from 'react';
import {SectionImageComponent} from "../../components";
import styled from "@emotion/styled";
import {Col, Container, Row} from "react-bootstrap";
import {useScrollingAnchor} from "../../utilities";

const ContentStyled = styled(Row)`
  height: 50vh;
  min-height: 30em;
`;

const SectionStyled = styled.section`
  color: var(--bs-white);
  background-color: var(--bs-primary);
`;

export const ContactSection = () => {
    const ref = useRef(null);
    useScrollingAnchor('contact', ref);

    return <SectionStyled className={'contact'} ref={ref}>
        <Container>
            <ContentStyled className={'content justify-content-md-center align-content-center align-content-md-unset align-items-center'}>
                <Col
                    lg={{
                        offset: 0,
                        span: 6,
                    }}
                    md={{
                        offset: 0,
                        span: 12,
                    }}
                    xs={{
                        offset: 2,
                        span: 8,
                    }}
                    className={'d-flex justify-content-center mt-xs-4 mt-md-0'}>
                    <SectionImageComponent src={'/contact.png'} alt={'Opened mail envelope with script symbol inside the flap'} />
                </Col>
                <Col
                    lg={6}
                    md={12}
                    className={'mt-4 mt-lg-0'}
                >
                    <div className={'d-flex justify-content-center'}>
                        <div className={'d-inline-block'} >
                            <h2>Contact Us</h2>

                            <p>We would love to hear from you! <br/> <a className={'text-secondary'} href={'mailto:hellocfo@gmail.com'}>hellocfo@gmail.com</a></p>

                        </div>
                    </div>
                </Col>
            </ContentStyled>
        </Container>
    </SectionStyled>;
}
