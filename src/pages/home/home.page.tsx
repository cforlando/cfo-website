import React, {useEffect} from 'react';
import {AboutSection, ContactSection, EventsSection, HeroSection} from "../../sections";
import {scrollToAnchor} from "../../utilities";
import _ from 'lodash';
import {PartnersComponent} from "../../sections/partners";

export const HomePage = () => {

    const {location: {
        state: {
            toAnchor = '/'
        } = {}
    } = {}} = window as any;

    // most navigation links are on the home page, now that there are more than one pages, anchorRefs may not exist
    // until the home page loads
    useEffect(() => {
        if(_.isString(toAnchor)){
            scrollToAnchor(toAnchor)
        }
    }, [toAnchor]);

    return <div>
        <HeroSection/>
        <EventsSection/>
        <AboutSection/>
        <PartnersComponent />
        <ContactSection/>
    </div>
}
