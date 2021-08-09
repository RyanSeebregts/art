import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'
import $ from 'jquery'
import './MenuIcon.css'
const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

interface propTypes {
    open: boolean
    color: string
    setOpen: any
}
function MenuIcon(props: propTypes) {

    useEffect(() => {
        animateOpen()
    }, [props.open])


    return (
        <Container
            onClick={toggle} 
        >
            <div style={{height: '30px', width: '30px', position: 'relative', zIndex: 20,}}>
                {/*leftTopRotate topDown leftIn */}
                <div className="barTopLeft leftTopRotate topDown leftIn" style={{background: props.color}}></div>
                {/* rightTopRotate topDown rightIn*/}
                <div className="barTopRight rightTopRotate topDown rightIn" style={{background: props.color}}></div>
                {/* left opacityNone*/}
                <div className="barMiddelLeft left opacityNone" style={{background: props.color}}></div>
                {/* right opacityNone*/}
                <div className="barMiddelRight right opacityNone" style={{background: props.color}}></div>
                {/* rightTopRotate bottomUp leftIn*/}
                <div className="barBottomLeft rightTopRotate bottomUp leftIn" style={{background: props.color}}></div>
                {/* leftTopRotate bottomUp rightIn*/}
                <div className="barBottomRight leftTopRotate bottomUp rightIn" style={{background: props.color}}></div>
            </div>

        </Container>
    );

    function toggle() {
        props.setOpen(!props.open)
    }

    function animateOpen() {
        if(props.open) {
            $('.barMiddelLeft').addClass('left');
            $('.barMiddelRight').addClass('right');
            $('.barMiddelLeft').addClass('opacityNone');
            $('.barMiddelRight').addClass('opacityNone');
            $('.barTopLeft').addClass('leftTopRotate');
            $('.barTopRight').addClass('rightTopRotate');
            $('.barBottomLeft').addClass('rightTopRotate');
            $('.barBottomRight').addClass('leftTopRotate');
            $('.barTopLeft').addClass('topDown');
            $('.barTopRight').addClass('topDown');
            $('.barBottomLeft').addClass('bottomUp');
            $('.barBottomRight').addClass('bottomUp');
            
            $('.barTopLeft').addClass('leftIn');
            $('.barTopRight').addClass('rightIn');
            $('.barBottomLeft').addClass('leftIn');
            $('.barBottomRight').addClass('rightIn');
        }
        else {
            $('.barMiddelLeft').removeClass('left');
            $('.barMiddelRight').removeClass('right');
            $('.barMiddelLeft').removeClass('opacityNone');
            $('.barMiddelRight').removeClass('opacityNone');
            $('.barTopLeft').removeClass('leftTopRotate');
            $('.barTopRight').removeClass('rightTopRotate');
            $('.barBottomLeft').removeClass('rightTopRotate');
            $('.barBottomRight').removeClass('leftTopRotate');
            $('.barTopLeft').removeClass('topDown');
            $('.barTopRight').removeClass('topDown');
            $('.barBottomLeft').removeClass('bottomUp');
            $('.barBottomRight').removeClass('bottomUp');
            
            $('.barTopLeft').removeClass('leftIn');
            $('.barTopRight').removeClass('rightIn');
            $('.barBottomLeft').removeClass('leftIn');
            $('.barBottomRight').removeClass('rightIn');
        }
    }
}

export default MenuIcon;