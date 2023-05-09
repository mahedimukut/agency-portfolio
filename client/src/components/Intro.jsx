import React from 'react'
import styled from 'styled-components'
import Woman from '../img/woman.jpg';
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    padding: 20px;
`
const Left = styled.div`
width: 60%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Title = styled.h1`
   font-size: 60px;
   width: 60%;
`
const Desc = styled.p`
    width: 60%;
    font-size: 20px;
    margin-top: 20px;
`

const Info = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;

`
const Button = styled.button`
    padding: 15px;
    background-color: darkblue;
    color: white;
    border-radius: 10px;
    font-weight: bold;
    border: none;
    letter-spacing: 2px;
    cursor: pointer;
`
const Contact = styled.div`
    display: flex;
    flex-direction: column;
`
const Phone = styled.span`
    color: #f0667d;
    font-weight: bold;
`
const ContactText = styled.span`
    color: gray;
    margin-top: 5px;
`
const Right = styled.div`
width: 40%;
text-align: center;
`
const Image = styled.img`
    width: 80%;
    border-radius: 50px;

`
function Intro() {
    return (
        <Container>
            <Left>
                <Title>Adventures in creative age</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odit error modi consequuntur asperiores dolore ea commodi repellendus sit quaerat.</Desc>
                <Info>
                    <Button>Start a project</Button>
                    <Contact>
                        <Phone>Call us (012) 345 - 6789</Phone>
                        <ContactText>Have any query?</ContactText>
                    </Contact>
                </Info>
            </Left>
            <Right><Image src={Woman} /></Right>
            <AnimatedShapes />
        </Container>
    )
}

export default Intro