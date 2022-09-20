import React from 'react'
import styled from '@emotion/styled';
import search from '../img/search.jpg'


const Container = styled.div`
width:150px;
display:flex;
padding:20px;
display:flex;
flex-direction:column;
align-items:center;
-webkit-box-shadow: 4px 7px 13px -1px rgba(0,0,0,0.51);
-moz-box-shadow: 4px 7px 13px -1px rgba(0,0,0,0.51);
box-shadow: 4px 7px 13px -1px rgba(0,0,0,0.51);
`;

const Image = styled.div`
width:20px;
`;

const Text = styled.span`
text-align:center;
margin-top:10px;
`;







const MiniCard = () => {
  return (
    <Container>
        <Image>
     <img  src ={search} alt=""  
     /> 
        </Image>
        <Text>Even if you do start on the wrong foot if you continually challenge that initial experience </Text>
    </Container>
  )
}

export default MiniCard