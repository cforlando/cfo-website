import {BaseThemeColors} from "./constants";

export type ColorThemeState = {
    [key: string]: string;
}

export type ColorThemeAction =
    | {type: 'SET_PRIMARY_COLOR', color: string}
    | {type: 'INVERT_THEME'}

// colorThemeInitialState will eventually be initialized from user's localStorage, defaulting to BaseThemeColors
export const colorThemeInitialState = BaseThemeColors;

export function colorThemeReducer(
    state: ColorThemeState,
    action: ColorThemeAction
): ColorThemeState { // useReducer may have a type for 'action'
    switch (action.type) {
        // will add dark mode toggle, primary color theming, etc.
        default:
            return {...state};
    }
}
