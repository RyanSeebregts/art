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
function ContactPage(props: propTypes) {


    return (
        <Container>
            CONTACT TEMPLATE
        </Container>
    );
}

export default ContactPage;