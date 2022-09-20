import React from 'react'
import styled from '@emotion/styled'
import wo from '../img/wo.jpg'
import AnimatedShapes from './AnimatedShapes';


const Container = styled.div`
height:100vh;
display:flex;
padding:20px;
`;

const Left = styled.div`
width : 60% ;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;


`;
const Title = styled.h1`
width:60%;
font-size :60px ;
`;

const Desc = styled.p`
width:60%;
font-size:20px;
margin-top:20px;
`
const Info = styled.div`
width : 60% ;
display:flex;
`;

const Button = styled.div`
padding:15px;
background-color:darkblue;
color:white;
border-radius:10px;
font-weight:bold;
cursor:pointer;
letter-spacing:2px;

`

const Contact = styled.div`
display:flex;
flex-direction:column;
`
const Phone = styled.div`
color:#f0667d;
font-weight:bold;
margin-left:40px
`

const ContactText = styled.div`
color:gray;
margin-top:5px;
padding-left:40px

`

const Right = styled.div`
width : 40% ;
`;

const Image = styled.div`
width : 100% ;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`;




const Intro = () => {
    return (
        <Container>
            <Left>
                <Title>Adventures in Creative age</Title>
                <Desc>
                    “A day wasted on others is not wasted on one's self.” “Love, like everything else in life, should be a discovery, an adventure, and like most adventures, you don't know you're having one
                    until you're right in the middle of it.”
                </Desc>
                <Info>
                    <Button>START A PROJECT</Button>
                    <Contact>
                        <Phone>Call us (012) 456 - 8998</Phone>
                        <ContactText>For any question or Concern</ContactText>
                    </Contact>
                </Info>
           </Left>
            
            <Right> 
            <Image>
            <img
            src={wo}
           
              alt=""
            />
          </Image>
            </Right>
            <AnimatedShapes/>
        
        </Container>
    )
}

export default Intro
