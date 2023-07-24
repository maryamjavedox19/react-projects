import React from 'react'
import { styled } from "styled-components";

function Section() {
    return (
        <Wrap></Wrap>
    )
}

export default Section
const Wrap = styled.div`
    widhth:100vw;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    background-image: url('/images/model-s.jpg')
`;