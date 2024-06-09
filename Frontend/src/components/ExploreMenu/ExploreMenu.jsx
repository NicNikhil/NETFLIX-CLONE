import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Discover Our Mouth-Watering Menu</h1>
            <p className='explore-menu-text'>Don't miss our special offerings, featuring unique and seasonal dishes that highlight the best ingredients and culinary techniques. Each special is a limited-time treat you won't want to miss.</p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-list-items'>
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt='' />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu
