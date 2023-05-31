//import Logo from '../logo.svg'

import React, { useState } from 'react';
import Laptop from '../images/Lap.jpg'
import SmartPhones from '../images/Phone.jpg'
import Footwear from '../images/Footwear.jpg'
import ClothesAndAccessories from '../images/C&A.jpg'
import products from './Products.css'


//import './Data.css';
const Data = () => {
  const [productitems, setproductitems] = useState([
    {
      id: "1",
      name: "Laptop",
      price: 150000,
      image: Laptop
    },
    {
      id: "2",
      name: "SmartPhones",
      price: 20000,
      image: SmartPhones
    },
    {
      id: "3",
      name: "Footwear",
      price: 500,
      image: Footwear
    }
  ]);
  
  const AddItem = () => {
    const newProduct = {
      id: `${productitems.length + 1}`,
      name: "Clothes & Accessories",
      price: 1000,
      image: ClothesAndAccessories
    };
    setproductitems([...productitems, newProduct]);
  };
  const removeitem = (id) => {
    const updateditems = productitems.filter((item) => item.id !== id);
    setproductitems(updateditems);
  };
  return (
    <>
      <div className='data'>
        {productitems.map((val, key) => {
          console.log(val)
          return (
            <div className="product" key={key}>
              <img src={val.image} width="200px" height="200px" alt="Product Image" />
              <div className="product-details">
                <h2 className="product-name">{val.name}</h2>
                <p className="product-price"> ${val.price}</p>
              </div>
              <button className='remove-button' onClick={() => removeitem(val.id)}>
                Remove
              </button>
            </div>
          )
        })}
      </div>
      <button className='addbutton' onClick={AddItem}>
        Add Products
      </button>
    <ul className="products"></ul>
      </>
  );
};
export default Data;


  
  
