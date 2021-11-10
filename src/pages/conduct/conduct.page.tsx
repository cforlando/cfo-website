import React, {useEffect, useMemo, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import {codeForConduct} from './code_of_conduct.text';
import {scrollToAnchor} from "../../utilities";
import {MarkDownContainerStyled, ConductImageStyled} from "./conduct.styles";
import {Col, Row} from "react-bootstrap";
import _ from 'lodash';

// forcing all anchor links to 1) open in a new tab, 2) have 'noreferrer' property
function creatExternalLink(props: any) {
    return React.createElement(`a`, {target: '_blank', rel: 'noreferrer', href: props.href}, props?.children)
}

const defaultProfileImageOrder = [
    '/CFO_img1_2.png',
    '/CFO_img2_2.png',
    '/CFO_img3_2.png',
    '/CFO_img4_2.png',
]

export const ConductPage = () => {
    const [profileImageOrder, setProfileImageOrder] = useState(defaultProfileImageOrder);

    // shuffle order of profile images on load
    useEffect(() => {
        setProfileImageOrder(_.shuffle(defaultProfileImageOrder))
    }, [])

    // scroll to top when loaded
    useEffect(() => {
        setTimeout(() => {
            scrollToAnchor('home');
        }, 50)
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
