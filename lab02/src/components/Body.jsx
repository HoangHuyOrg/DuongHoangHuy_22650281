import React from 'react';
import Filter from './filter/Filter';
import nothing from '../assets/images/nothing.png';

export default function Body() {
  return (
    <div className="body-wrapper">
      <Filter />
      <div className="content col-8">
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
      </div>
    </div>
  );
}