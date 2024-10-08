import React, { useContext } from 'react'
import './FoodDisplay2.css'
import { StoreContext } from '../../context/StoreContext2'
import FoodItem from '../FoodItem/FoodItem2'

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext)
    return (
        <div className='food-display2' id='food-display'>
            <h2>Activities near you</h2>
            <div className='food-display-list2'>
                {food_list.map((item, index) => {
                    {console.log(category, item.category);}
                    if (category === "All" || category === item.category) {
                        return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    }
                })}
            </div>
        </div>
    )
}

export default FoodDisplay;