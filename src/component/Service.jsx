import React from 'react'
import styled from '@emotion/styled'
import cute from '../img/cute.jpg'
import Play from '../img/Play.jpg (2).png'
import AnimatedShapes from './AnimatedShapes';
import MiniCard from './MiniCard';

const Container = styled.div`
display:flex;
`;

const Left = styled.div`
width:50% ;
`;
const Image = styled.div`
padding-top:100px;
width:90%;
display:flex;
justify-content: center;
 height:100%;

`;

const Right = styled.div`
width:50% ;
`;

const Wrapper  = styled.div`
padding:50px;
display:flex;
flex-direction:column;
`

const Title  = styled.h1`
font-size:60px;
`
const Desc  =styled.p`
font-size:22px;
margin-top:5px;
color:gray;
font-weight:30px;
`
const CardContainer = styled.div`
display:flex;
justify-content:space-between;
margin-top:50px;
`

const Button = styled.button`
padding:15px 20px;
width:180px;
padding-left:30px;
background-color:crimson;
color:white;
border:none;
border-radius:20px;
font-weight:bold;
margin-left:50px;
cursor:pointer;
margin-top:50px;
text-align:center;
display:flex;
align-items:center;
text-align:center;
font-size:15px;

letter-spacing:2px;
`;

const Icon = styled.div`
width:20px;

`;



const Service = () => {
  return (
   <Container>
    
    <Left>
      <Image>
        <img
      src={cute} alt=""
        /> 
      </Image>
    </Left>

  <Right>
      <Wrapper>
        <Title>Simple Process to start !</Title>
        <Desc>
             First impressions only happen once, and they can last a lifetime. No pressure, right?
         But just how important are first impressions to the long-term success of your career? Let’s see what the research suggests about your initial period on a new job.

        </Desc>

        <CardContainer>
       <MiniCard/>
       <MiniCard/>
       <MiniCard/>
      </CardContainer>
     
      {/* <Icon> < img  src={Play}/> </Icon> */}
      <Button>How it Works </Button>

      </Wrapper>

      


    </Right> 
    



    <AnimatedShapes/> 

   </Container>
  )
}

export default Service