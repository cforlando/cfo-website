import React from 'react';
import {Row, Col} from "react-bootstrap";
import {ImageStyled} from "../section-image";
import {SectionWithImage} from "../common";
import styled from "@emotion/styled";
import _ from 'lodash';
import {animated, useSpring} from "react-spring";

const BgImageSvg = styled.svg`
  position: absolute;
  width: 28em;
  height: 120%;
  z-index: -1;
`;

const revolvingPaths = [
    {
        color: 'rgb(0,97,82)',
        path: "M443.78,46.515C477.821,86.377 476.143,156.135 458.679,208.429C441.314,260.821 408.063,295.651 374.022,337.289C339.982,378.828 305.152,427.175 260.456,436.943C215.76,446.711 161.394,417.9 122.716,376.361C84.137,334.723 61.246,280.357 59.273,223.92C57.299,167.482 76.145,109.169 114.823,69.307C153.5,29.544 211.813,8.331 275.947,2.608C339.982,-3.016 409.74,6.752 443.78,46.515",
    },
    {
        color: 'rgb(151,176,242)',
        path: "M394.414,73.002C443.849,97.819 504.005,136.732 519.689,191.229C535.274,245.726 506.586,315.907 457.151,365.243C407.617,414.578 337.436,442.968 272.416,437.806C207.397,432.645 147.44,393.931 98.303,344.595C49.166,295.359 10.849,235.402 6.481,171.177C2.114,106.952 31.894,38.458 81.031,13.641C130.167,-11.175 198.661,7.685 252.364,22.575C306.067,37.465 344.98,48.186 394.414,73.002",
    },
    {
        color: 'rgb(247,179,52)',
        path: "M437.96,44.809C494.714,83.941 534.101,161.14 526.382,230.3C518.55,299.342 463.612,360.344 406.858,389.9C350.105,419.455 291.534,417.564 225.246,425.721C158.844,433.76 84.723,451.848 46.357,422.293C7.992,392.737 5.268,315.538 3.338,236.447C1.522,157.239 0.5,76.138 38.866,37.007C77.232,-2.243 155.098,0.358 231.148,2.368C307.085,4.259 381.206,5.56 437.96,44.809",
    },
]

export const ImageTextComponent = ({
        imageData: {
            src = '',
            alt = '',
        },
        children,
        className,
        isHero = false,
    }: SectionWithImage) => {
    const leftNarrow = {
        span: 6,
    };
    const leftWide = {
        span: 7,
    };
    const rightNarrow = {
        span: 5,
    };
    const rightWide = {
        span: 6,
    };

    const svgPath = useSpring({
        loop: true,
        to: [
            ...revolvingPaths,
            _.head(revolvingPaths)
        ],
        from: _.head(revolvingPaths),
        config: {
            frequency: 0.75
        },
    });

    return <Row className={`py-4 position-relative justify-content-md-center ${className}`}>
        <Col
            md={leftNarrow}
            sm={leftWide}
            xs={leftWide}
        >
            {children}
        </Col>
        <Col
            md={rightWide}
            sm={rightNarrow}
            xs={rightNarrow}
            className={'position-relative justify-content-center d-md-flex'}>
            {isHero && <BgImageSvg>
                <animated.path
                    d={svgPath.path}
                    fill={svgPath.color}
                />
            </BgImageSvg>}
            {!_.isEmpty(src) && <ImageStyled
                isHero={isHero}
                alt={alt ?? ''}
                src={src ?? ''}
                className="section-image d-md-inline-block"
            />}
        </Col>
    </Row>
}
