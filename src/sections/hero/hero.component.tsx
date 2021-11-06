import React from 'react';
import {Container} from "react-bootstrap";
import {SectionStyled, ContentStyled, AnchorStyled} from "./hero.styles";

export const HeroSection = () => {
    return <SectionStyled id={'hero'} className={'hero position-relative'}>
        <Container className={'position-relative'}>
            <ContentStyled className={'content align-items-center'} isHero imageData={
                {
                    src: 'http://placekitten.com/260/400',
                    alt: 'Sketch of techie-person writing some notes',
                    backgrounds: [
                        '/orange-blob.svg',
                        '/blue-blob.svg',
                        '/green-blob.svg',
                    ]
                }
            } >
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
