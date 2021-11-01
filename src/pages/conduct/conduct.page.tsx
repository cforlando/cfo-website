import React, {useEffect} from 'react';
import {Container} from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import {codeForConduct} from './code_of_conduct.text';
import {scrollToAnchor} from "../../utilities";
import {MarkDownContainerStyled} from "./conduct.styles";

function creatExternalLink(props: any) {
    return React.createElement(`a`, {target: '_blank', rel: 'noreferrer', href: props.href}, props?.children)
}

export const ConductPage = () => {

    // scroll to top when loaded
    useEffect(() => {
        scrollToAnchor('home');
    }, []);

    return <MarkDownContainerStyled>
        <ReactMarkdown
            children={codeForConduct}
            components={{
                a: creatExternalLink
            }}
        />
    </MarkDownContainerStyled>
}
