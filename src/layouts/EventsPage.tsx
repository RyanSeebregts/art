import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'

const Container = styled.div`
    height: 100%;
    width: 100%;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
`

interface propTypes {

}
function EventsPage(props: propTypes) {


    return (
        <Container>
            EVENTS TEMPLATE
        </Container>
    );
}

export default EventsPage;