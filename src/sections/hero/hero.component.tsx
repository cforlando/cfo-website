import React from 'react';
import {Container} from "react-bootstrap";
import {SectionStyled, FloatingIconBg, ContentStyled, AnchorStyled} from "./hero.styles";

export const HeroSection = () => {
    return <SectionStyled id={'hero'} className={'hero position-relative'}>
        <FloatingIconBg alt={''} role={'presentation'} src={'/logo_small_orange.svg'} />
        <Container>
            <ContentStyled className={'content align-items-center'} isHero imageData={{src: '/person_sketch.png', alt: 'Sketch of techie-person writing some notes'}} >
                <h1>CODE FOR ORLANDO</h1>

                <p>
                    We are a group of "<strong>civic hackers</strong>" from various disciplines who are committed to
                    volunteering our talents to make a difference in the local community through{' '}
                    <strong>technology</strong>. We are a brigade of{' '}
                    <AnchorStyled
                        rel={'noreferrer'}
                        href={'https://www.codeforamerica.org/'}
                        target={'_blank'}>Code for America</AnchorStyled> based in{' '}
                    <AnchorStyled
                        rel={'noreferrer'}
                        href={'https://www.orlando.gov'}
                        target={'_blank'}>Orlando, Florida - The City Beautiful</AnchorStyled>.
                </p>
            </ContentStyled>
        </Container>
    </SectionStyled>
}
