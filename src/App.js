import './App.css';
import Navbar from './component/Navbar';
import styled from '@emotion/styled'
import Intro from './component/Intro';
import Feature from './component/Feature';
import Service from './component/Service';

const Container = styled.div`
height:100vh;
overflow:hidden;
position:relative;
`;

const Shape = styled.div`
width:100%;
height:100%;
top:0;
position:absolute;
top:0;
left:0;
z-index:-1;
`;

const IntoShape = styled.div`
width:100%;
height:100%;
top:0;
position:absolute;
top:0;
left:0;
z-index:-1;
clip-path: polygon(67% 0, 100% 0, 100% 100%, 55% 100%);
background-color:crimson;
`;
const FeatureShape = styled.div`
width:100%;
height:100%;
top:0;
position:absolute;
top:0;
left:0;
z-index:-1;

 clip-path: polygon(0 1%, 55% 0, 37% 100%, 0% 100%);
background-color:pink;

`;

const ServiceShape = styled.div`
width:100%;
height:100%;
top:0;
position:absolute;
top:0;
left:0;
z-index:-1;
clip-path: polygon(0 0, 37% 0, 37% 100%, 0% 100%);
background-color:#d1e6cf;

`;

function App() {
  return (
    <>
    <Container>
      <Navbar/>
      <Intro/>
      <IntoShape/>
      </Container>

      <Container>
        <Feature/>
        <FeatureShape/>
      </Container>

      <Container>
        <Service/>
      <ServiceShape/> 
      
      </Container>

      
    </>
  );
}

export default App;

