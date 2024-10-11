import React from 'react'
import './NewCollection.css'
import Item from '../Item/Item'
import new_collection from '../Assets/NewCollection'
const NewCollection = () => {
  return (
    <div className='new-collections'>
        <h1>NEW COLLECCTION</h1> 
        <hr />
        <div className="collections">
  {new_collection.map((item, i) => (
    <Item 
      key={i} 
      id={item.id} 
      name={item.name} 
      image={item.image} 
      new_price={item.new_price} 
      old_price={item.old_price} 
    />
  ))}
</div>
    </div>
  )
}

export default NewCollection
