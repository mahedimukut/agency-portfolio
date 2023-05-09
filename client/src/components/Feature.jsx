import React from 'react'
import styled from 'styled-components'
import App from '../img/app.png'
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    width: 50%;
`
const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Image = styled.img`
  width: 98%;
`
const Title = styled.span`
font-size:70px;
`
const SubTitle = styled.span`
font-size:24px;
font-style: italic;
color: #333;
margin-top: 30px;

`
const Desc = styled.span`
font-size: 20px;
color: #777;
margin-top: 30px;
`
const Button = styled.button`
width: 150px;
border: none;
padding: 15px 20px;
background-color: darkblue;
color: white;
border-radius: 20px;
font-size: 20px;
cursor: pointer;
margin-top: 20px;
`

function Feature() {
    return (
        <Container>
            <Left>
                <Image src={App} />
            </Left>
            <Right>
                <Title>
                    <b>Good</b> Design <br />
                    <b>Good</b> Business
                </Title>
                <SubTitle>Lorem ipsum dolor sit amet consectetur adipisicing elit.</SubTitle>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae debitis nostrum enim qui soluta. Perspiciatis quasi exercitationem praesentium ipsum quam?</Desc>
                <Button>Learn More</Button>
            </Right>
            <AnimatedShapes />
        </Container>
    )
}

export default Feature