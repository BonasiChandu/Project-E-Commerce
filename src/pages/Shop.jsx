import React, { useState } from 'react';
import data_product from '../components/Assets/all_product';
import Item from '../components/Items/Item';
import './CSS/Shop.css';

const Shop = () => {
 
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase()); 
  };

 
  const filterProducts = (item) => {
    return item.name.toLowerCase().includes(searchQuery);
  };

  return (
    <div className='home'>
      <div className='title'>
        <h1>Happy shopping</h1>
      </div>
      
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          onChange={handleSearchChange}
          value={searchQuery}
        />
        <button>Search</button>
      </div>

      
      <div className="home-item">
        {data_product
          .filter(filterProducts) 
          .map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
                highlighted={searchQuery && item.name.toLowerCase().includes(searchQuery)} 
              />
            );
          })}
      </div>
    </div>
  );
};

export default Shop;

