import React from "react";
import styled, { css } from "styled-components";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Service from "./components/Service";

const Container = styled.div`
height: 100vh;
overflow: hidden;
position: relative;
`
const Shape = css`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left:0;
  z-index: -1;
`
const IntroShape = styled.div`
  ${Shape};
  clip-path: polygon(100% 0, 81% 0, 68% 100%, 100% 100%);
  background-color: crimson;

`
const FeatureShape = styled.div`
  ${Shape};
  clip-path: polygon(0 0, 55% 0, 33% 100%, 0% 100%);
  background-color: pink;

`
const ServieShape = styled.div`
  ${Shape};
  clip-path: polygon(0 0, 33% 0, 33% 100%, 0% 100%);
  background-color: #f88497;

`
const PriceShape = styled.div`
  ${Shape};
  clip-path: polygon(33% 0, 100% 0, 100% 100%, 67% 100%);
  background-color: crimson;

`

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <Feature />
        <IntroShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
      <Container>
        <Service />
        <ServieShape />
      </Container>
      <Container>
        <Price />
        <PriceShape />
      </Container>
      <Container>
        <Contact />
        <Footer />
      </Container>
    </>
  );
}

export default App;
