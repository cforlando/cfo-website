import React, {useEffect, useMemo, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import {codeForConduct} from './code_of_conduct.text';
import {scrollToAnchor} from "../../utilities";
import {MarkDownContainerStyled} from "./conduct.styles";
import {Col, Row} from "react-bootstrap";
import styled from "@emotion/styled";
import _ from 'lodash';

const ConductImageStyled = styled.img<{isFirst?: boolean; isLast?: boolean; isOdd?: boolean}>`
  height: 20vh;
  max-height: 20vh;

  margin-top: ${(props) => props.isFirst ? '5em' : '0'};
  margin-bottom: ${(props) => props.isLast ? '0' : '10em'};

  padding-${props => props.isOdd ? 'right' : 'left'}: 3em;
`;

// forcing all anchor links to 1) open in a new tab, 2) have 'noreferrer' property
function creatExternalLink(props: any) {
    return React.createElement(`a`, {target: '_blank', rel: 'noreferrer', href: props.href}, props?.children)
}

export const ConductPage = () => {
    const [profileImageOrder, setProfileImageOrder] = useState([
        '/profile_standout_1.png',
        '/profile_standout_2.png',
        '/profile_standout_3.png',
        '/profile_standout_4.png',
    ]);

    // shuffle order of profile images on load
    useEffect(() => {
        setProfileImageOrder(_.shuffle(profileImageOrder))
    }, [])

    // scroll to top when loaded
    useEffect(() => {
        scrollToAnchor('home');
    }, []);

    const renderedProfileImages = useMemo(() => {
        return _.map(profileImageOrder, (imageSrc, idx) => {
            const isOdd = idx % 2 === 1;
            return <ConductImageStyled
                isFirst={idx === 0}
                isLast={idx === (_.size(profileImageOrder) - 1)}
                isOdd={isOdd}
                src={imageSrc}
                alt={'Decorative images of a member'}
            />;
        })
    }, [profileImageOrder])

    return <MarkDownContainerStyled>
        <Row>
            <Col
                xs={{
                    span: 12
                }}
                lg={{
                    span: 4
                }}
                className={'d-none d-lg-block'}
            >
                {renderedProfileImages}
            </Col>
            <Col
                xs={{
                    span: 12
                }}
                lg={{
                    span: 8
                }}
            >
                <ReactMarkdown
                    children={codeForConduct}
                    components={{ // any JSX.IntrinsicElements that can exist in markdown can be passed through
                        a: creatExternalLink
                    }}
                />
            </Col>
        </Row>
    </MarkDownContainerStyled>
}