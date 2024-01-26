import React from 'react'
import Section from './Section'

function Home() {
  return (
    <div className='container h-screen '>
        <Section
          title="Model S" 
          desc="Order Online for Touchless Delivery" 
          bg="/images/model-s.jpg"
          leftBut="Custom Order"
          rightBut="Existing Inventory"
        />
        <Section
          title="Model Y" 
          desc="Order Online for Touchless Delivery" 
          bg="/images/model-y.jpg"
          leftBut="Custom Order"
          rightBut="Existing Inventory"
        />
        <Section
          title="Model 3" 
          desc="Order Online for Touchless Delivery" 
          bg="/images/model-3.jpg"
          leftBut="Custom Order"
          rightBut="Existing Inventory"
        />
        <Section
          title="Model X" 
          desc="Order Online for Touchless Delivery" 
          bg="/images/model-x.jpg"
          leftBut="Custom Order"
          rightBut="Existing Inventory"
        />
        <Section
          title="Lowest Cost Solar Panels in America" 
          desc="Money-back guarantee" 
          bg="/images/solar-panel.jpg"
          leftBut="Order now"
          rightBut="Learn More"
        />
        <Section
          title="Solar for New Roofs" 
          desc="Solar Roofs Costs Less Than a New Roof Plus Solar Panel" 
          bg="/images/solar-roof.jpg"
          leftBut="Order now"
          rightBut="Learn More"
        />
        <Section
          title="Accessories" 
          desc="" 
          bg="/images/accessories.jpg"
          leftBut="Shop Now"
          rightBut=""
        />
    </div>
  )
}

export default Home
