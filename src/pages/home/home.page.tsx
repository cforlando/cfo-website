import React, {useEffect} from 'react';
import {AboutSection, ContactSection, EventsSection, HeroSection} from "../../sections";
import {scrollToAnchor} from "../../utilities";
import {useHistory} from "react-router-dom";
import _ from 'lodash';

export const HomePage = () => {
    const history = useHistory<{ toAnchor: string | undefined }>();

    const {location: {
        state: {
            toAnchor
        } = {}
    } = {}} = history;

    // most navigation links are on the home page, now that there are more than one pages, anchorRefs may not exist
    // until the home page loads
    useEffect(() => {
        if(_.isString(toAnchor)){
            scrollToAnchor(toAnchor)
        }
    }, [scrollToAnchor, toAnchor]);

    return <div>
        <HeroSection/>
        <EventsSection/>
        <AboutSection/>
        <ContactSection/>
    </div>
}
