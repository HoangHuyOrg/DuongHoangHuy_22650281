import React from 'react';
import slider from '../../assets/images/slider.png';
export default function FilterTime() {
  return (
    <div className="filter-time">
      <h3>Time</h3>
      <img src={slider} alt="" className="img-time" />
    </div>
  );
}