import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'

const Container = styled.div`
    background: black;
    display: flex;
    align-items: center;
`

const EyeContainer = styled.div`
    position: relative;
    height: calc(100% / 4);
    width: calc(100% / 5);
    background: white;
    border-radius: calc(100% / 2) calc(100% / 2) 0px 0px;
    overflow: hidden;

`

const EyeBalls = styled.div`
    position: absolute;
    background: blue;
    transition: all 0.1s ease;
`

const EyeContainerPadding = styled.div`
    width: calc(100% / 5);
    background: transparent;
`

interface propTypes {
    mouseX: number
    mouseY: number
}
function Eyes(props: propTypes) {

    const ContainerHeight = 100

    const EyeContainerRef = useRef<HTMLDivElement>(null)

    const [containerMiddleX, setContainerMiddleX] = useState(0)
    const [containerMiddleY, setContainerMiddleY] = useState(0)

    const [eyesX, setEyesX] = useState(0)
    const [eyesY, setEyesY] = useState(0)

    useEffect(() => {
        console.log('umm')
        let eyeRef = EyeContainerRef.current
        if(eyeRef) {
            let rect = eyeRef.getBoundingClientRect()
            setContainerMiddleX(rect.x + (ContainerHeight/2) )
            setContainerMiddleY(rect.y + (ContainerHeight/2) )
        }
    }, [EyeContainerRef.current])

    useEffect(() => {

        let topY = containerMiddleY - ( ContainerHeight/(4*2) )
        let leftX = containerMiddleX

        let top = 0


        let dif = topY - props.mouseY
        if(dif < 0) {
            top = dif * -1
            if(top > (ContainerHeight/4 - ContainerHeight/10)) 
                top = ContainerHeight/4 - ContainerHeight/10
        }


        setEyesX( top)

        let left = 0


        dif = leftX - props.mouseX

        if(dif < 0) {
            left = dif * -1
            if(left > (ContainerHeight/5 - ContainerHeight/10)) 
            left = ContainerHeight/5 - ContainerHeight/10
        }


        setEyesY( left )

    }, [props.mouseX, props.mouseY])

    return (
        <Container
            style={{
                height: ContainerHeight,
                width: ContainerHeight
            }}
            ref={EyeContainerRef}
        >
            <EyeContainerPadding />

            <EyeContainer>
                <EyeBalls 
                    style={{
                        top: `${eyesX}px`,
                        left: `${eyesY}px`,
                        height: `${ContainerHeight/10}px`,
                        width: `${ContainerHeight/10}px`,
                        borderRadius: `${ContainerHeight/20}px`

                    }}
                />
            </EyeContainer>

            <EyeContainerPadding />

            <EyeContainer>
                <EyeBalls 
                    style={{
                        top: `${eyesX}px`,
                        left: `${eyesY}px`,
                        height: `${ContainerHeight/10}px`,
                        width: `${ContainerHeight/10}px`,
                        borderRadius: `${ContainerHeight/20}px`
                    }}
                />
            </EyeContainer>

            <EyeContainerPadding />

        </Container>
    );
}

export default Eyes;