import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'

const Container = styled.div`
    height: calc(100% - 80px);
    width: 100%;
    background: white;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Content = styled.div`
    width: calc(100% - 160px);
    height: calc(100% - 80px);
    background: pink;
`


interface propTypes {

}
function FirstPage(props: propTypes) {


    return (
        <Container>
            <div style={{height: '80px'}} />

            <Content />

        </Container>
    );
}

export default FirstPage;