import React, {useRef} from 'react';
import {ImageRightComponent} from "../../components";
import styled from "@emotion/styled";
import {Container} from "react-bootstrap";
import {useScrollingAnchor} from "../../utilities";

const FloatingIconBg = styled.img`
  position: absolute;
  max-width: 30em;
  max-height: 90%;
  right: -5vw;
  top: -10%;
  opacity: 0.2;
  color: var(--bs-white);
`;

const BgWatermark = styled.img`
  position: absolute;
  max-width: 85vw;
  width: 85vw;
  left: 50%;
  top: -20%;
  transform: translateX(-50%);
  opacity: 0.2;
`;

export const AboutSection = () => {
    const ref = useRef(null);
    useScrollingAnchor('about', ref);

    return <section ref={ref} className={'about-us d-flex align-items-center position-relative'}>
        <div className={'position-relative flex-grow-1'}>
            <FloatingIconBg alt={''} role={'presentation'} className={'d-none d-md-inline-block'} src={'/about_us.svg'} />
            <BgWatermark alt={''} role={'presentation'} className={'d-md-none'} src={'/about_us.svg'} />
            <Container>
                <ImageRightComponent className={'hide-section-image-md justify-content-center align-items-center'} imageData={{src: '/about_us.svg', alt: 'Sketch of techie-person writing some notes'}} >
                    <h2>ABOUT US</h2>

                    <p>
                        Code for Orlando, a local Code for America brigade, brings the community together to improve
                        Orlando through technology. We are a group of “civic hackers” from various disciplines who are
                        committed to volunteering our talents to make a difference. We unite to improve the way residents
                        and local government experience Orlando.
                    </p>
                </ImageRightComponent>
            </Container>
        </div>
    </section>
}
