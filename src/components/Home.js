import React from 'react'
import styled from "styled-components"
import Section from './Section'
import Header from './Header'

function Home() {
    return (
        <container>

            <Section
                title="Model S"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory"
            />


            <Section
                title="Model Y"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory" />

            <Section
                title="Model 3"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory"
            />

            <Section
                title="Model X"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory"
            />

            <Section
                title="Lowest Cost Solars in America"
                description="Money-back guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order now"
                rightBtnText="learn more"
            />

            <Section
                title="Solar for new roofs"
                description="Solar roof cost less than a new roof"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Learn more"
            />

            <Section
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="Shop Now"
            />


        </container>
    )
}

export default Home


// this allows to style specific div
const Container = styled.div`
height:100vh;

`;