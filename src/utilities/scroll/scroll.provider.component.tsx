/** @jsxImportSource @emotion/react */
import React, {Dispatch, useEffect, useContext, useRef, useReducer, RefObject} from "react";
import {Nav} from "react-bootstrap";
import {ScrollAction, scrollRegisterReducer, ScrollRegisterState} from "./scroll.reducer";
import _ from 'lodash';
import {css, SerializedStyles} from "@emotion/react";

export type ScrollAnchorContext = {
    anchorDispatch: Dispatch<ScrollAction>,
    anchorRefs: ScrollRegisterState,
}

export const ScrollRegisterContext = React.createContext({} as ScrollAnchorContext);

export const ScrollingAnchor = ({anchorId, children}: {anchorId: string, children?: any}) => {
    const {anchorDispatch: dispatch} = useContext(ScrollRegisterContext)
    const ref = useRef(null);

    useEffect(() => {
        const anchorRef = ref?.current;

        if (anchorRef) {
            dispatch({type: "REGISTER_REF", anchorId, anchorRef});
        }

        return () =>  dispatch({type: "DEREGISTER_REF", anchorId})
    }, [ref, anchorId]);

    return <div ref={ref}>
        {children}
    </div>
};

const scrollToAnchor = (toRef: any) => {
    try {
        toRef?.scrollIntoView({
            behavior: "smooth",
        });
    } catch {
        // do nothing
    }
}

export const ScrollingLink = ({toAnchor, children, cssStyles}: {toAnchor: string, children: any, cssStyles?: SerializedStyles}) => {
    const {anchorRefs} = useContext(ScrollRegisterContext);

    return <Nav.Link css={cssStyles ?? css``} eventKey={toAnchor} onClick={() => {
        const anchorRef = _.get(anchorRefs, toAnchor, null)

        if(anchorRef) {
            scrollToAnchor(anchorRef)
        }
    }}>
        {children}
    </Nav.Link>
}

export const ScrollingProvider = ({children}: {children: any}) => {
    const [anchorRefs, anchorDispatch] = useReducer(scrollRegisterReducer, {});

    return <ScrollRegisterContext.Provider value={{anchorRefs, anchorDispatch}}>
        {children}
    </ScrollRegisterContext.Provider>
}
