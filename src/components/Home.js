import React from 'react'
import styled from 'styled-components'
import Section from './Section'


function Home() {
  return (
    <Container>
        <Section 
          model = "Model S"
          description = "Order Online for Touchless Delivery"
          backgroundImg = "model-s.jpg"
          leftBtnText = "Custom order"
          rightBtnText = "Existing Inventory"
        />
        <Section 
          model = "Model X"
          description = "Order Online for Touchless Delivery"
          backgroundImg = "model-x.jpg"
          leftBtnText = "Custom order"
          rightBtnText = "Existing Inventory"
        />
        <Section 
          model = "Model Y"
          description = "Order Online for Touchless Delivery"
          backgroundImg = "model-y.jpg"
          leftBtnText = "Custom order"
          rightBtnText = "Existing Inventory"
        />
        <Section 
          model = "Model 3"
          description = "Order Online for Touchless Delivery"
          backgroundImg = "model-3.jpg"
          leftBtnText = "Custom order"
          rightBtnText = "Existing Inventory"
        />
        <Section 
          model = "Solar for New Roofs"
          description = "Decent Cost Solar Roofs"
          backgroundImg = "solar-roof.jpg"
          leftBtnText = "Order now"
          rightBtnText = "Learn more"
        />
        <Section 
          model = "Lowest Cost Solar Panels in India"
          description = "Money Back Guarantee"
          backgroundImg = "solar-panel.jpg"
          leftBtnText = "Order now"
          rightBtnText = "Learn more"
        />
        <Section 
          model = "Accessories"
          description = ""
          backgroundImg = "accessories.jpg"
          leftBtnText = "Shop now"
        />
    </Container>
    
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
    z-index: 10;
`