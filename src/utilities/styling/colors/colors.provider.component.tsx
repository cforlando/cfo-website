import React, {Dispatch, useReducer} from 'react';
import {
    colorThemeReducer as reducer,
    colorThemeInitialState as initialState,
    ColorThemeState,
    ColorThemeAction
} from './colors.reducer';

export type ColorThemeContext = {
    colors: ColorThemeState,
    dispatch: Dispatch<ColorThemeAction>,
}

export const ThemeColorsContext = React.createContext({} as ColorThemeContext);

/**
 * Dynamic color manager. Bootstrap's color theming is static
 * @param children
 * @constructor
 */
export const ColorThemeProvider = ({children}: {children: any}) => {
    const [colorState, dispatch] = useReducer(reducer, initialState);
    return <ThemeColorsContext.Provider value={{colors: colorState, dispatch} as ColorThemeContext} >
        {children}
    </ThemeColorsContext.Provider>;
}

