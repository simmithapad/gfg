
import React, { useContext } from 'react'
import './FoodItem2.css'
import { assets } from '../../assets/assets2'
import { StoreContext } from '../../context/StoreContext2'

const FoodItem = ({ id, name, price, description, image }) => {
    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);
    return (
        <div className='food-item2'>
            <div className="food-item-img-container2">
                <img className='food-item-image2' src={image} alt="" />
                {!cartItems[id]
                    ? <img className='add2' onClick={() => addToCart(id)} src={assets.add_icon_white} alt='' />
                    : <div className='food-item-counter2'>
                        <img onClick={() =>removeFromCart(id)} src={assets.remove_icon_red} alt='' />
                        <p>{cartItems[id]}</p>
                        <img onClick={() =>addToCart(id)} src={assets.add_icon_green} alt='' />                        
                    </div>
                }
            </div>
            <div className='food-item-info2'>
                <div className='food-item-name-rating2'>
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt='' />

                </div>
                <p className='food-item-desc2'>{description}</p>
                <p className='food-item-price2'>{price}</p>
            </div>

        </div>
    )
}

export default FoodItem;
