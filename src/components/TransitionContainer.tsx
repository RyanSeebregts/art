import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'

const Container = styled.div`
    
`


type PositionStates = "relative" | "fixed" | "absolute";

interface propTypes {
    position?: PositionStates
    top?: string
    left?: string
    height?: string
    width?: string
    length: number

    open: boolean
    children: any
}
function TransitionContainer(props: propTypes) {


    const [localOpen, setLocalOpen] = useState(false)

    const [displaying, setDisplaying] = useState(false)


    useEffect(() => {
        let timer1:any = null
        if(props.open !== localOpen) {
            if(!props.open) {
                timer1 = setTimeout(() => setDisplaying(false), props.length * 1000)
                setLocalOpen(false)
            }

            else {
                setDisplaying(true)
                timer1 = setTimeout(() => setLocalOpen(true), 4)

            }
        }

        return () => {
            clearTimeout(timer1)
        }
    }, [props.open])
    return (
        <Container
            style={{
                position: props.position || 'relative',
                top: props.top || '0px',
                left: props.left || '0px',
                height: props.height || '',
                width: props.width || '',
                transition: `all ${props.length}s ease` || '0s',
                display: displaying ? 'inherit' : 'none',
                opacity: localOpen ? 1 : 0,

            }}
        >
            {
                props.children
            }

        </Container>
    );
}

export default TransitionContainer;