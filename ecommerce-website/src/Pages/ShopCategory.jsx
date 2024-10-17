import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/down arrow-img.png';
import Item from '../Components/Item/Item';

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);

  const filteredProducts = Array.isArray(all_product)
    ? all_product.filter(
        (item) =>
          !category || // Show all products if no category is provided
          (typeof item.category === 'string' &&
            typeof category === 'string' &&
            item.category.trim().toLowerCase() === category.trim().toLowerCase())
      )
    : [];

  return (
    <div className="shop-category">
      <img src={banner} alt="banner" />
      <div className="shop-category-indexSort">
        <p>
          <span>Showing 1-12</span> out of {filteredProducts.length} Products
        </p>
        <div className="shopcategory-sort">
          Sort by <img style={{ width: 15 }} src={dropdown_icon} alt="dropdown-icon" />
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
