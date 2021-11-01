import React from 'react';
import {ImageRightComponent} from "../../components";
import styled from "@emotion/styled";
import {Container} from "react-bootstrap";

const ContentStyled = styled(ImageRightComponent)`
  height: 80vh;
  min-height: 30em;

  a {
    color: var(--bs-orange);
  }
`;

const SectionStyled = styled.section`
  position: relative;

  ::before {
    background-size: cover;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -3;
  }
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
    return <SectionStyled className={'hero position-relative'}>
        <FloatingIconBg alt={''} role={'presentation'} src={'/logo_small_orange.svg'} />
        <Container>
            <ContentStyled className={'content align-items-center'} isHero imageData={{src: '/person_sketch.png', alt: 'Sketch of techie-person writing some notes'}} >
                <h1>CODE FOR ORLANDO</h1>

                <p>
                    A brigade of <a rel={'noreferrer'} href={'https://www.codeforamerica.org/'} target={'_blank'}>Code for America</a>{' '}
                    based in <a rel={'noreferrer'} href={'https://www.orlando.gov'} target={'_blank'}>Orlando, Florida - The City
                    Beautiful</a>. We are civic techies looking for people of any skill set whose interested to improve
                    our community and governmental services.
                </p>
            </ContentStyled>
        </Container>
    </SectionStyled>
}
