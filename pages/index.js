import { useState } from 'react'

import Button from '../components/Button'
import Container from '../components/Container'
import Filters from '../components/Filters'
import Grid from '../components/Grid'
import Heading from '../components/Heading'
import Layout from '../components/Layout'
import Showcase from '../components/Showcase'
import { getAllRestaurants, getAllRestaurantTypes } from '../lib/api'

export async function getStaticProps() { //if you include this in a page template, this will be invoked first before the whole page component loads. 
  const restaurants = await getAllRestaurants();
  const restaurantTypes = await getAllRestaurantTypes ();

  return {
    props: {
      restaurants,
      restaurantTypes
    }, // will be passed to the page component as props
  }
}

const HomePage = ({ restaurants, restaurantTypes }) => { 
  
// {state variable, setter function}
  const [activeCategory, setActiveCategory] = useState("All")
  const filteredRestaurants = restaurants.filter((restaurant) => {
    if (activeCategory === "All") {
      return restaurant;
    }
    if (restaurant.node.restaurantTypes.edges.length > 0) {
      return restaurant.node.restaurantTypes.edges[0].node.name === activeCategory ? restaurant : false;
    }
  })


  return <Layout>
    <Showcase 
      title="A guide to the best eating spots in Syracuse."
      description="With hundreds of restaurants located within the 315, there really is a little something for all tastes."
      cta="View Restaurants"
    />
    
    <section>
      {/* <Heading level="2">{activeCategory}</Heading>
      <Button
        label="All"
        clickHandler={() => {
          setActiveCategory("All")
        }}
      />
      <Button
        label="Mexican"
        clickHandler={() => {
          setActiveCategory("Mexican")
        }}
      />
      <Button
        label="American"
        clickHandler={() => {
          setActiveCategory("American")
        }}
      /> */}
      <Container>
        <Filters 
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          categories={restaurantTypes}
        /> 
        <Grid data={filteredRestaurants}/>
      </Container>
    </section>
  </Layout>
}
export default HomePage // default function responsible for this template. declare default one. export means make it available to be displayed on front end of website 