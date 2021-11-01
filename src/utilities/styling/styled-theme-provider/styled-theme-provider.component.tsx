import React, {useContext, useEffect, useMemo, useState} from 'react';
import {ThemeProvider, Global, css, SerializedStyles} from '@emotion/react';
import _ from 'lodash';
import {ThemeColorsContext, ColorThemeProvider, ColorThemeState} from "../colors";
import {BaseTheme} from './styled-theme-provider.constants';

export type StyledComponentTheme = {
    colors?: ColorThemeState,
    fonts?: string[],
    fontSizes?: {
        small: string,
        medium: string,
        large: string,
    }
}

function hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// builds all the css variables that affects our Bootstrap theme
function buildCssVariables(colors: ColorThemeState): SerializedStyles {
    return css`
      html{
        ${_.map(_.toPairs(colors ?? {}), ([colorName, colorHexValue]) => {
            try {
                // hex to rbg
                const [, hex] = colorHexValue.split('#');
                const {r = '00', g = '00', b = '00'} = hexToRgb(hex) ?? {};

                return css`
                  --bs-${_.toLower(colorName)}: ${colorHexValue};
                  --bs-${_.toLower(colorName)}-rgb: ${r}, ${g}, ${b};
                `;
            } catch {
                // provided color value has not proper hex. Do nothing on crash
            }
        })}
      }
    `
}

/**
 * Our Styled components take advantage of a theme form this theme provider.
 * We want to provide the ability to set colors dynamically (e.g. light/dark mode),
 * so we merge that functionality here
  * @param children
 * @constructor
 */
const ThemeProviderWithColorTheme = ({children}: {children: any}) => {
    const {colors} = useContext(ThemeColorsContext);
    const [theme, setStyledComponentsTheme] = useState({...BaseTheme, colors} as StyledComponentTheme);
    const [cssVariables, setCssVariables] = useState(css`` as SerializedStyles);

    const globalStyles = useMemo(() => {
        return css``;
    }, [cssVariables])

    const {colors: styledThemeColors} = theme;

    useEffect(() => {
        const _cssVariables = buildCssVariables(colors);
        setCssVariables(_cssVariables)
    }, [])

    // update the @emotion/styled colors when our color theme changes
    useEffect(() => {
        if (!_.isEqual(colors, styledThemeColors)) {
            setStyledComponentsTheme({
                ...theme,
                colors
            })

            const _cssVariables = buildCssVariables(colors);
            setCssVariables(_cssVariables)
        }
    }, [colors, theme, styledThemeColors, setStyledComponentsTheme, setCssVariables])

    return  <ThemeProvider theme={theme}>
        {/* setting global styles here for convenience */}
        <Global
            styles={cssVariables}
        />
        {children}
    </ThemeProvider>
}

// combine the theme & colors providers into one
export const StyledComponentsProvider = ({children}: {children: any}) => {
    return <ColorThemeProvider>
        <ThemeProviderWithColorTheme>
            {children}
        </ThemeProviderWithColorTheme>
    </ColorThemeProvider>
}
