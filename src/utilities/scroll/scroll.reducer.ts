import {RefObject} from "react";
import _ from 'lodash';

export type ScrollRegisterState = {
    [key: string]: RefObject<any>,
}

export type ScrollAction =
    | {type: 'REGISTER_REF', anchorId: string, anchorRef: RefObject<any>}
    | {type: 'DEREGISTER_REF', anchorId: string}
    | {type: 'SCROLL_T0_ANCHOR', anchorId: string}

export function scrollRegisterReducer(
    state: ScrollRegisterState,
    action: ScrollAction
): ScrollRegisterState {
    switch (action.type) {
        case 'REGISTER_REF': {
            return {
                ...state,
                [action.anchorId]: action.anchorRef,
            }
        }
        case 'DEREGISTER_REF': {
            return _.omit(state, action.anchorId);
        }
        // no need to for state on SCROLL_T0_ANCHOR
        default:
            return state;
    }
}
