/** @jsxImportSource @emotion/react */
import React, {Dispatch, useEffect, useContext, useRef, useReducer, RefObject, useState, useMemo} from "react";
import {Nav} from "react-bootstrap";
import {ScrollAction, scrollRegisterReducer, ScrollRegisterState} from "./scroll.reducer";
import _ from 'lodash';
import {SerializedStyles} from "@emotion/react";

export type ScrollAnchorContext = {
    anchorDispatch: Dispatch<ScrollAction>,
    anchorRefs: ScrollRegisterState,
}

export const ScrollRegisterContext = React.createContext({} as ScrollAnchorContext);

export const ScrollingAnchor = ({anchorId = '', children}: {anchorId: string, children?: any}) => {
    const ref = useRef(null);

    useScrollingAnchor(anchorId, ref);

    return <div ref={ref}>
        {children}
    </div>
};

export function useScrollingAnchor(anchorId:string, ref: RefObject<any>) {
    const {anchorDispatch: dispatch} = useContext(ScrollRegisterContext);

    useEffect(() => {
        const anchorRef = ref?.current;

        if (anchorRef) {
            dispatch({type: "REGISTER_REF", anchorId, anchorRef});
        }

        return () =>  dispatch({type: "DEREGISTER_REF", anchorId});
    }, [ref, anchorId, dispatch]);
}

export const ScrollingLink = ({toAnchor, children, cssStyles, onClick: callParentOnClick = _.noop}: {toAnchor: string, children: any, cssStyles?: SerializedStyles, onClick?: () => void}) => {
    const {anchorRefs} = useContext(ScrollRegisterContext);

    return <Nav.Link css={cssStyles} eventKey={toAnchor} onClick={() => {

        // React-Bootstrap is doing something funky. Asynchronously run provided onClick
        setTimeout(() => callParentOnClick(), 100);

        const anchorRef: any = _.get(anchorRefs, toAnchor, null)

        try {
            // maintains browser history
            window.location.href = `${window.location.protocol}//${window.location.host}#${toAnchor}`;

            anchorRef?.scrollIntoView({
                behavior: "smooth",
            });
        } catch {
            // do nothing
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

// returns boolean based on if element is visible helps with lazy loading
// see https://stackoverflow.com/questions/45514676/react-check-if-element-is-visible-in-dom
export function useOnScreen(ref: RefObject<any>) {
    const [isIntersecting, setIntersecting] = useState(false);

    const observer = useMemo(() => {
        if(ref?.current) {
            observer.disconnect();
        }

        return new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting)
        )
    }, [ref]);

    useEffect(() => {
        if (ref) {
            observer.observe(ref.current)
        }

        // Remove the observer as soon as the component is unmounted
        return () => { observer.disconnect() }
    }, [ref, observer])

    return isIntersecting;
}
