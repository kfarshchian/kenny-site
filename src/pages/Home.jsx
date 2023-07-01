import React from 'react';
import {  Container } from '@mui/material';


import meeting from '../logos/3.2.png'
// import zIndex from '@mui/material/styles/zIndex';
// import handshake from '../logos/handshake.jpg'

function Home() {
  

  return (
    <>
    <div id='homeOne' style={{ 
        height: '550px',
        overflow: "hidden",
        paddingTop: '100px',
        zIndex: '-1'
      }}>
      <img src={meeting} alt='meeting' style={{ 
        width: "100%",
        // height: "100%", 
        overflow: "hidden"
      }}/>
        <Container>
        </Container>
    </div>
    <div id='homeTwo'>
        <Container>
        </Container>
    </div>
    <div id='homeThree'>
        <Container>
        </Container>
    </div>
    </>
  );
}

export default Home;
