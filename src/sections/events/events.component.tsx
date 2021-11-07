import React, {useRef} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {useScrollingAnchor} from "../../utilities";
import {
    SectionStyled,
    SectionBg,
    FloatingLeaf,
    ButtonStyled,
    ButtonImage,
} from './events.styles';
import {ImageStyled} from "../../components";

export const EventsSection = () => {
    const ref = useRef(null);
    useScrollingAnchor('events', ref);

    const src = '/events_2.png';
    const alt = 'Calendar symbol';

    return <SectionStyled id={'events'} className={'events'} ref={ref}>
        <SectionBg className={'orange-fruit'} />
        <FloatingLeaf alt={''} role={'presentation'} className={'d-lg-none'} src={'/leaf.svg'} />
        <Container>
            <Row className={`py-4 position-relative justify-content-md-center hide-section-image-md align-items-center`}>
                <Col
                    className={'d-none d-md-block col-0 col-md-5 position-relative justify-content-center d-md-flex'}>
                    <ImageStyled
                        alt={alt ?? ''}
                        src={src ?? ''}
                        className="section-image d-md-inline-block"
                    />
                </Col>
                <Col className={'col-10 col-md-7 offset-1 offset-md-0 px-md-0'}>
                    <h2>Events</h2>

                    {/*<p>*/}
                    {/*    Let's chat! We have groups focused on community projects. The best way to get in contact with us is through 'Get Involved'. We also host Eventbrite and Meetup events.*/}
                    {/*</p>*/}

                    <div className={"position-relative my-4 d-flex flex-wrap justify-content-center"}>
                        <ButtonStyled className={'d-flex my-3 align-items-center mx-3'} variant="meetup" size="lg" href={'https://www.meetup.com/Code-For-Orlando'} target={'_blank'}>
                            <ButtonImage alt={''} role={'presentation'} src={'/meetup.svg'} width={40} height={40} /><span className={'px-2'}>Meetup</span>
                        </ButtonStyled>
                        <ButtonStyled className={'d-flex my-3 align-items-center mx-3'} variant="eventbrite" size="lg" href={'https://www.eventbrite.com/o/code-for-orlando-33511214869'} target={'_blank'}>
                            <ButtonImage alt={''} role={'presentation'} src={'/eventbrite.svg'} width={40} height={40} /><span className={'px-2'}>Eventbrite</span>
                        </ButtonStyled>
                        <ButtonStyled className={'d-flex my-3 align-items-center mx-3'} variant="get-involved" size="lg" href={'https://docs.google.com/forms/d/e/1FAIpQLSdb15ewHn06IMLzaWPrqqrEsfh7Xso2A5N4OIkHDpYJ7Z2ajA/viewform'} target={'_blank'}>
                            <ButtonImage alt={''} role={'presentation'} src={'/logo_small_orange.svg'} width={40} height={40} /><span className={'px-2'}>Get Involved</span>
                        </ButtonStyled>
                    </div>
                </Col>
            </Row>
        </Container>
    </SectionStyled>
}
