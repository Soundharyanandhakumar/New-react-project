//import Logo from '../logo.svg'

import React, { useState } from 'react';
import Laptop from '../images/Lap.jpg'
import SmartPhones from '../images/Phone.jpg'
import Footwear from '../images/Footwear.jpg'
import Airpods from '../images/airpods.jpg'
import Smartwatch from '../images/Smartwatch.jpg'
import ClothesAndAccessories from '../images/C&A.jpg'
import  './Products.css'

//import './Data.css';
const Data = () => {
  const [productitems, setproductitems] = useState([
    {
      id: "1",
      name: "Smartwatch",
      price: 3000,
      image: Smartwatch
    },
    {
      id: "2",
      name: "Airpods",
      price: 2000,
      image: Airpods
    },
    {
      id: "3",
      name: "Smartphones",
      price: 25000,
      image: SmartPhones
    },
    {
      id: "4",
      name: "Clothes & Accessories",
      price: 10000,
      image: ClothesAndAccessories
    },
    {
      id: "5",
      name: "Footwear",
      price: 500,
      image: Footwear
    }
  ]);
  
  const AddItem = () => {
    const newProduct = {
      id: `${productitems.length + 1}`,
      name: "Laptop",
      price: 150000,
      image: Laptop
    };
    setproductitems([...productitems, newProduct]);
  };
  const removeitem = (id) => {
    const updateditems = productitems.filter((item) => item.id !== id);
    setproductitems(updateditems);
  };
  return (
    <>
    <button className='add-button' onClick={AddItem}>
        Add Products
      </button>
      <div className='data'>
        {productitems.map((val, key) => {
          console.log(val)
          return (
            <div className="product-details" key={key}>
              <img src={val.image} width="200px" height="200px" alt="Product" />
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
    <ul className="products"></ul>
      </>
  );
};
export default Data;


  
  
