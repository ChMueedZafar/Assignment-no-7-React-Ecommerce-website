import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/arrow down-img';
import Item from '../Components/Item/Item';
// import './css/ShopCategory.css'

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);

  const filteredProducts = all_product.filter((item) => item.category === category);

  return (
    <div className="shop-category">
      <img src={banner} alt="banner"/>
      <div className="shop-category-indexSort">
        <p>
          <span>Showing 1-12</span> out of {filteredProducts.length} Products
        </p>
        <div className="shopcategory-sort">
          Sort by <img style={{width:15}} src={dropdown_icon} alt="dropdown-icon" />
        </div>
      </div>

      <div className="shopcategory-products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, i) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ShopCategory;
