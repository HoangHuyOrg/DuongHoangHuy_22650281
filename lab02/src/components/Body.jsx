import React, { useEffect, useState } from 'react';
import Filter from './filter/Filter';
import nothing from '../assets/images/nothing.png';
import { getProducts } from './js/products';

export default function Body() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await getProducts()
      if (res.products) {
        setProducts(res.products)
      }
    }

    fetchAPI()
  }, [])
  console.log(products)

  return (
    <div className="body-wrapper">
      <Filter />
      { products.length == 0 &&(<div className="content col-8">
        <h2>Sorry, no results were found for 'DuongHoangHuy'</h2>
        <div className="img-wrapper">
          <img src={nothing} alt="" className="img" />
          We have all your Independence Day sweets covered.
        </div>
        <div className="button-wrapper-content">
          <button className="btn1">Sweet Cake</button>
          <button className="btn2">Black Cake</button>
          <button className="btn3">Pozole Verde</button>
          <button className="btn4">Healthy Food</button>
        </div>
      </div>)}


      <div className="product-container">
        {products.map((x) => {
          return (
            <div className="product-card col-3" key={x.id}>
              <img src={x.thumbnail} alt="" className="image" />
              <h4 className="product-title">{x.title}</h4>
            </div>
          )

        })}
      </div>

    </div>
  );
}