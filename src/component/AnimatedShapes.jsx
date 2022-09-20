import React from 'react'
import styled from '@emotion/styled'

const Square = styled.div`
width:60px;
height:60px;
background-color :yellow;
opacity:0.8;
position:absolute;
top:-60px;
left:-60px;
z-index:-1;
 animation:square 25s linear alternate infinite;

 @keyframes square {
    to{
        transform:translate(100vw , 100vh);
    }
 }

`;





const AnimatedShapes = () => {
  return (
    <>
    <Square/>
    
    </>
  )
}

export default AnimatedShapes