import React from 'react';
import {ImageRightComponent} from "../../components";
import styled from "@emotion/styled";
import {Container} from "react-bootstrap";
import {ScrollingAnchor} from "../../utilities";

const ContentStyled = styled(ImageRightComponent)`
  height: 50vh;
  min-height: 30em;
`;

const FloatingIconBg = styled.img`
  position: absolute;
  max-width: 80vw;
  height: 90%;
  right: -15vw;
  top: -5%;
  opacity: 0.2;
  color: var(--bs-white);
`;

export const AboutSection = () => {
    return <ScrollingAnchor anchorId={'about'}>
        <div className={'position-relative'}>
            <FloatingIconBg src={'/about.png'} />
            <Container>
                <ContentStyled className={'hide-section-image-md align-items-center'} imageData={{src: '/about.png', alt: 'Sketch of techie-person writing some notes'}} >
                    <h1>About us</h1>

                    <p>
                        Code for Orlando, a local Code for America brigade, brings the community together to improve
                        Orlando through technology. We are a group of “civic hackers” from various disciplines who are
                        committed to volunteering our talents to make a difference. We unite to improve the way residents
                        and local government experience Orlando.
                    </p>
                </ContentStyled>
            </Container>
        </div>
    </ScrollingAnchor>
}
