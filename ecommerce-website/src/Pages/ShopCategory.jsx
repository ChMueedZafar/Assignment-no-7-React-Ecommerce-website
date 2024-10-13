import React, { useContext } from 'react'
// import './CSS/ShopCategory.CSS'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/LOGO.png'
import Item from '../Components/Item/Item'
const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img src={props.banner} alt="banners img" />
      <div className="shop-category-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 Proucts
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdown_icon} alt="dropdown-icon" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if (props.category===item.category){
            return <Item  key={i} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price} />
          }
          else {
            return null;
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory
