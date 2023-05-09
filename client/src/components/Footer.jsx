import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 10%;
    background-color: #111;
    color: lightgray;
`
const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
`
const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
`
const ListItems = styled.li`
    margin-right: 20px;
    
`
const Copyright = styled.span`
    
`
function Footer() {
    return (
        <Container>
            <Wrapper>
                <List>
                    <ListItems>Guide</ListItems>
                    <ListItems>Support</ListItems>
                    <ListItems>API</ListItems>
                    <ListItems>Community</ListItems>
                </List>
                <Copyright>Mahedi Mukut </Copyright>
            </Wrapper>
        </Container>
    )
}

export default Footer