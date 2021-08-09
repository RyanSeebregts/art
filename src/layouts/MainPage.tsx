import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'
import FirstPage from './FirstPage'
import NavBar from '../components/NavBar'

import AboutPage from './AboutPage'
import GalleryPage from './GalleryPage'
import MeetUsPage from './MeetUsPage'
import EventsPage from './EventsPage';
import ContactPage from './ContactPage';
const Container = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    background: white;
    overflow-x: hidden;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
`

interface propTypes {

}
function MainPage(props: propTypes) {



    return (
        <Container
            id="container"
        >
            <FirstPage />
            <NavBar setScroll={setScroll}/>

            <AboutPage />
            <MeetUsPage />
            <GalleryPage />
            <EventsPage />
            <ContactPage />
            
        </Container>
    );

    function setScroll(top: number) {
        let scroller = document.getElementById("container")
        if(scroller) 
            scroller.scrollTop = top
    }
}

export default MainPage;