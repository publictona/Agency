import styled from '@emotion/styled'
import React from 'react'
import smartphone from '../img/smartphone.jpg'
import AnimatedShapes from './AnimatedShapes';

const Container= styled.div`
display:flex;
`;

const Left= styled.div`
width:50%;
`;

const Image = styled.div`
padding-top:80px;
width:80%;
display:flex;
justify-content: center;
`;

const Right = styled.div`
width:50%;
display:flex;
flex-direction:column;
justify-content: center;
margin-top:30px;
`;

const Title = styled.span`
font-size:70px;
`;

const SubTitle = styled.span`
font-size:25px ;
margin-top:20px;
font-style : italic;
color:#333;
`;

const Desc = styled.p`
font-size:20px ;
margin-top:20px;
color:gray;
`;

const Button = styled.div`
padding:15px 20px;
width:150px;
background-color:blue;
color:white;
border-radius:20px;
font-weight:bold;
cursor:pointer;
margin-top:20px;
text-align:center;
letter-spacing:2px;
`;

const Feature = () => {
  return (
    <Container>
        <Left>
        <Image>
            <img
            src={smartphone} alt=""
            />
          </Image>
        </Left>
        <Right>
            <Title>
                <b>good</b> Design
                <br/>
                <b>good</b> Business

            </Title>
            <SubTitle>
                We Know that good design Means good Business!!
            </SubTitle>
            <Desc>
            This is the primary and salient step to build enduring bonds with other clients and businesses. This will also help you do more business
   
            </Desc>
            <Desc>
             This will also help you do more business, ...
   
            </Desc>
            <Button>LEARN MORE</Button>

        </Right>
        <AnimatedShapes/>

    </Container>
  )
}

export default Feature