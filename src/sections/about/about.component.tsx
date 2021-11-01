import React, {useRef} from 'react';
import {ImageRightComponent} from "../../components";
import {Container} from "react-bootstrap";
import {useScrollingAnchor} from "../../utilities";
import {FloatingIconBg, BgWatermark} from "./about.styles";

export const AboutSection = () => {
    const ref = useRef(null);
    useScrollingAnchor('about', ref);

    return <section id={'about'} ref={ref} className={'about-us d-flex align-items-center position-relative'}>
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
