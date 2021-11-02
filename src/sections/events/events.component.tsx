import React, {useRef} from 'react';
import {Container} from "react-bootstrap";
import {useScrollingAnchor} from "../../utilities";
import {SectionStyled, SectionBg, FloatingIconBg, FloatingLeaf, ContentStyled, ButtonStyled, ButtonImage} from './events.styles';

export const EventsSection = () => {
    const ref = useRef(null);
    useScrollingAnchor('events', ref);

    return <SectionStyled id={'events'} className={'events'} ref={ref}>
        <SectionBg className={'orange-fruit'} />
        <FloatingLeaf alt={''} role={'presentation'} className={'d-lg-none'} src={'/leaf.svg'} />
        <FloatingIconBg alt={''} role={'presentation'} src={'/calendar.svg'} />
        <Container>
            <ContentStyled className={'hide-section-image-md align-items-center'} imageData={{src: '/calendar.svg', alt: 'Calendar symbol'}} >
                <h2>Events</h2>

                <p>
                    Join us! We have groups that you can most likely join. The pandemic hasn't stopped us from
                    holding regular virtual meetings. We still host Eventbrite and Meetup events.
                </p>

                <div className={"my-4 d-flex flex-wrap justify-content-center"}>
                    <ButtonStyled className={'d-flex my-3 align-items-center mx-3'} variant="meetup" size="lg" href={'https://www.meetup.com/Code-For-Orlando'} target={'_blank'}>
                        <ButtonImage alt={''} role={'presentation'} src={'/meetup.svg'} width={40} height={40} /><span className={'px-2'}>Meetup</span>
                    </ButtonStyled>
                    <ButtonStyled className={'d-flex my-3 align-items-center mx-3'} variant="eventbrite" size="lg" href={'https://www.eventbrite.com/o/code-for-orlando-33511214869'} target={'_blank'}>
                        <ButtonImage alt={''} role={'presentation'} src={'/eventbrite.svg'} width={40} height={40} /><span className={'px-2'}>Eventbrite</span>
                    </ButtonStyled>
                    <ButtonStyled className={'d-flex my-3 align-items-center mx-3'} variant="get-involved" size="lg" href={'https://docs.google.com/forms/d/e/1FAIpQLSdb15ewHn06IMLzaWPrqqrEsfh7Xso2A5N4OIkHDpYJ7Z2ajA/viewform'} target={'_blank'}>
                        <ButtonImage alt={''} role={'presentation'} src={'/logo_small_white.svg'} width={40} height={40} /><span className={'px-2'}>Get Involved</span>
                    </ButtonStyled>
                </div>
            </ContentStyled>
        </Container>
    </SectionStyled>
}
