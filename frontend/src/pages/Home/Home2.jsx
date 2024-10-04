import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header2'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu2'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = () => {

  const[category, setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <ExploreMenu category = {category} setCategory={setCategory}/>
      <FoodDisplay category = {category}/>
    </div>
  )
}

export default Home
