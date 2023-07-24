import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
    return (
        <container>
            <Section />
        </container>
    )
}

export default Home


// this allows to style specific div
const Container = styled.div`
height:100vh;

`;