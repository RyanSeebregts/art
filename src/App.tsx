import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'

import Eyes from './components/Eyes'
import MainPage from './layouts/MainPage';

const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`


function App() {
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  useEffect(() => {

    document.addEventListener('mousemove', function(e: any){
      setMouseX(e.clientX)
      setMouseY(e.clientY)
    }, false)

  }, [])
  return (
    <Container>
      <MainPage />
    </Container>
  );
}

export default App;
