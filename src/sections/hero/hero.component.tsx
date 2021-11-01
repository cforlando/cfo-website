import React from 'react';
import {ImageRightComponent} from "../../components";
import styled from "@emotion/styled";
import {Container} from "react-bootstrap";

const ContentStyled = styled(ImageRightComponent)`
  height: 70vh;
  min-height: 30em;
`;

const FloatingIconBg = styled.img`
  position: absolute;
  max-width: 80vw;
  height: 90%;
  right: -3vw;
  top: -5%;
  opacity: 0.2;
  color: var(--bs-white);
  z-index: -2;
`;

export const HeroSection = () => {
    return <div className={'position-relative'}>
        <FloatingIconBg src={'/logo_small_orange.svg'} />
        <Container>
            <ContentStyled className={'hero-section align-items-center'} imageData={{src: '/person_sketch.png', alt: 'Sketch of techie-person writing some notes'}} >
                <h1>Responsive left-aligned hero with image</h1>

                <p>
                    Meeting with local developers (or anyone interested in web development) is an essential part of
                    what makes us special. We cherish community, and enjoy fostering a unique culture of creatives,
                    developers and individuals interested in tech. Join us on Meetup for upcoming events and online
                    meetings.
                </p>
            </ContentStyled>
        </Container>
    </div>
}
