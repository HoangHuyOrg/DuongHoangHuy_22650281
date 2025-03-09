import React from 'react';
import FilterType from './FilterType';
import FilterTime from './FilterTime';
import FilterRating from './FilterRating';

export default function Filter() {
  return (
    <nav className="col-4 nav-filter">
      <h2 className="filter-header">Filter</h2>
      <FilterType />
      <FilterTime />
      <FilterRating />
      <div className="button-wrapper">
        <button className="btn btn-apply">Apply</button>
      </div>
    </nav>
  );
}