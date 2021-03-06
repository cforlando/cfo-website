import React, {useRef} from 'react';
import {ImageStyled} from "../../components";
import {Col, Container} from "react-bootstrap";
import {useScrollingAnchor} from "../../utilities";
import {ContentStyled, SectionStyled} from "./contact.styles";

export const ContactSection = () => {
    const ref = useRef(null);
    useScrollingAnchor('contact', ref);

    return <SectionStyled id={'contact'} className={'contact'} ref={ref}>
        <Container>
            <ContentStyled className={'content justify-content-md-center align-content-center align-content-md-unset align-items-center'}>
                <Col
                    lg={{
                        offset: 0,
                        span: 3,
                    }}
                    md={{
                        offset: 0,
                        span: 12,
                    }}
                    xs={{
                        offset: 2,
                        span: 8,
                    }}
                    className={'d-none d-lg-flex justify-content-center mt-xs-4 mt-md-0'}>
                    <ImageStyled src={'/contact.png'} alt={'Opened mail envelope with script symbol inside the flap'} />
                </Col>
                <Col
                    lg={3}
                    md={12}
                    className={'mt-4 mt-lg-0'}
                >
                    <div className={'d-flex justify-content-center'}>
                        <div className={'d-inline-block'} >
                            <h2>Contact Us</h2>

                            <p>We would love to hear from you! <br/> <a className={'text-secondary'} href={'mailto:hellocfo@gmail.com'}>leadership@codefororlando.com</a></p>

                        </div>
                    </div>
                </Col>
            </ContentStyled>
        </Container>
    </SectionStyled>;
}
