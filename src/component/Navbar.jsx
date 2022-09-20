import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
height:70px;
`
const Wrapper = styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
align-items:center;
border-radius:20px;

`

const Left = styled.div`
width:60;
`

const Logo = styled.h1`
font-weight :bold;
text-decoration:underline crimson;
`

const Menu = styled.ul`
display:flex;
list-style:none;
`;

const MenuItem = styled.li`
font-weight:bold;
font-size:20px;
color:gray;
margin-right:50px;
`;

const Button = styled.button`
border:2px solid black;
padding:10px 15px;
border-radius:20px;
letter-spacing:2px;
font-weight:Bold;
color:white;
background-color:crimson;
cursor:pointer;


`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
               
                <Logo>Agency</Logo>
                <Menu>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Features</MenuItem>
                    <MenuItem>Services</MenuItem>
                    <MenuItem>Pricing</MenuItem>
                    <MenuItem>Contact</MenuItem>
                </Menu>
                
               
                <Button>JOIN NOW</Button>
            </Wrapper>
        </Container>
    )
}

export default Navbar