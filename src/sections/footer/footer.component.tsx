import styled from "@emotion/styled";

const FooterIcon = styled.img`
    width: 2em;
    height: 2em;
`;

const ContainerStyled = styled.footer`
  background-color: var(--bs-gray-800);
`;

export const FooterComponent = () => {
    return <ContainerStyled className={'py-2 d-flex justify-content-center'}>
        <div className={'d-inline-block'} >
            <a rel={'noreferrer'} href={'https://www.facebook.com/codefororlando'} target={'_blank'}>
                <FooterIcon alt={'Facebook external link'} src={'/facebook.svg'} className={'px-2'} />
            </a>
            <a rel={'noreferrer'} href={'https://twitter.com/codefororlando'} target={'_blank'}>
                <FooterIcon alt={'twitter external link'} src={'/twitter.svg'} className={'px-2'} />
            </a>
            <a rel={'noreferrer'} href={'https://www.meetup.com/Code-For-Orlando/'} target={'_blank'}>
                <FooterIcon alt={'Meetup external link'} src={'/meetup.svg'} className={'px-2'} />
            </a>
            <a rel={'noreferrer'} href={'https://github.com/cforlando/'} target={'_blank'}>
                <FooterIcon alt={'Github external link'} src={'/github.svg'} className={'px-2'} />
            </a>
            <a rel={'noreferrer'} href={'https://www.eventbrite.com/o/code-for-orlando-33511214869'} target={'_blank'}>
                <FooterIcon alt={'Eventbrite external link'} src={'/eventbrite.svg'} className={'px-2'} />
            </a>
        </div>
    </ContainerStyled>
}
