import React, { useState } from 'react';
import Laptop from '../images/Lap.jpg'
import SmartPhones from '../images/Phone.jpg'
import Footwear from '../images/Footwear.jpg'
import Airpods from '../images/airpods.jpg'
import Smartwatch from '../images/Smartwatch.jpg'
import ClothesAndAccessories from '../images/C&A.jpg'
import './Bundle.css'
const Createbundle = () => {
    const [bundleForm, setBundleForm] = useState({
        product1: {
          id: "1",
          name: "Smartwatch",
          price: 3000,
          image: Smartwatch
        },
        product2: {
          id: "2",
          name: "Airpods",
          price: 2000,
          image: Airpods
        },
        discount: "10"
    })
    const [bundledProducts, setBundledProducts] = useState([])
    const productitems = [
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
      },
      {
        id: "6",
        name: "Laptop",
        price: 150000,
        image: Laptop
      }
    ];
    const handleChange = (e) => {
        if (e.target.name === "discount") {
            setBundleForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
        } else {
            const item = productitems.filter(item => item.id === e.target.value)[0];
            setBundleForm(prev => ({ ...prev, [e.target.name]: item }));
        }
    };
    const createBundle = (e) => {
        e.preventDefault();
        const discountedPrice1 = bundleForm.product1.price - (bundleForm.product1.price * bundleForm.discount / 100);
        const discountedPrice2 = bundleForm.product2.price - (bundleForm.product2.price * bundleForm.discount / 100);
        const finalAmount = discountedPrice1 + discountedPrice2;
        const bundledProduct = {
            product1: {
                ...bundleForm.product1,
                price: discountedPrice1
            },
            product2: {
                ...bundleForm.product2,
                price: discountedPrice2
            },
            discount: bundleForm.discount,
            finalAmount: finalAmount
        };
        setBundledProducts([...bundledProducts, bundledProduct]);
    };
    return (
        <div className='createbundle'>
            <h2>Createbundle</h2>
            <form className='form' onSubmit={createBundle}>
                <label className='p1'>Product 1</label>
                <select name="product1" id="product1" onChange={handleChange}>
                    {productitems.map((item) => (
                        <option value={item.id}>{item.name}</option>
                    ))}
                </select>
                <label className='p2'>Product 2</label>
                <select name="product2" id="product2" onChange={handleChange}>
                    {productitems.map((item) => (
                        <option value={item.id}>{item.name}</option>
                    ))}
                </select>
                <label>Discount</label>
                <select name="discount" id="discount" onChange={handleChange}>
                    <option value="10">10%</option>
                    <option value="25">25%</option>
                    <option value="40">40%</option>
                    <option value="50">50%</option>
                </select>
                <button>Submit</button>
            </form>
            <div>
                {bundledProducts.map(product => (
                    <>
                        <label className='labelproduct1'>Product 1</label>
                        <div className="product" key={product.product1}>
                            <img src={product.product1.image} width="200px" height="200px" alt="Product" />
                            <div className="product-details">
                                <h3 className="product-name">{product.product1.name}</h3>
                                <p className="product-price"> ${product.product1.price}</p>
                            </div>
                        </div>
                        <label className='labelproduct2' >Product 2</label>
                        <div className="product" key={product.product2}>
                            <img src={product.product2.image} width="200px" height="200px" alt="Product" />
                            <div className="product-details">
                                <h3 className="product-name">{product.product2.name}</h3>
                                <p className="product-price"> ${product.product2.price}</p>
                            </div>
                        </div>
                        <div>{product.discount}</div>
                    </>
                ))}
            </div>
        </div>
    );
}

export default Createbundle;