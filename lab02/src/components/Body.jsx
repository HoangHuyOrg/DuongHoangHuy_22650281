import React from 'react'
import Filter from './filter/Filter'
import slider from '../assets/images/slider.png'
import rating1 from '../assets/images/rating_1.png'
import rating2 from '../assets/images/rating_2.png'
import rating3 from '../assets/images/rating_3.png'
import rating4 from '../assets/images/rating_4.png'
import rating5 from '../assets/images/rating_5.png'
import nothing from '../assets/images/nothing.png'


export default function Body() {
    return (
        <div className="body-wrapper">
            <nav className="col-4 nav-filter">
                <h2 className='filter-header'>
                    Filter
                </h2>

                <div className="filter-type">

                    <h3>Type</h3>
                    <form action="" className="form-type">
                        <ul className="type-left col-6">
                            <li className="item">
                                <input type="checkbox" name="checkbox1" id="checkbox1" className='item' />
                                Pan-tried
                            </li>
                            <li className="item">
                                <input type="checkbox" name="checkbox1" id="checkbox1" className='item' />
                                Grilled
                            </li>
                            <li className="item">
                                <input type="checkbox" name="checkbox1" id="checkbox1" className='item' />
                                Sauteed
                            </li>
                            <li className="item">
                                <input type="checkbox" name="checkbox1" id="checkbox1" className='item' />
                                Steamed
                            </li>
                        </ul>

                        <ul className="type-right col-6">
                            <li className="item">
                                <input type="checkbox" name="checkbox1" id="checkbox1" className='item' />
                                Pan-tried
                            </li>
                            <li className="item">
                                <input type="checkbox" name="checkbox1" id="checkbox1" className='item' />
                                Grilled
                            </li>
                            <li className="item">
                                <input type="checkbox" name="checkbox1" id="checkbox1" className='item' />
                                Sauteed
                            </li>
                            <li className="item">
                                <input type="checkbox" name="checkbox1" id="checkbox1" className='item' />
                                Steamed
                            </li>
                        </ul>
                    </form>
                </div>

                <div className="filter-time">
                    <h3>Time</h3>
                    <img src={slider} alt="" className="img-time" />
                </div>

                <div className="filter-rating">
                    <h3>Rating</h3>
                    <ul className="list-rate">
                        <li className="item">
                            <input type="checkbox" className='five-star' name="five-star" id="five-star" />
                            <img src={rating5} alt="" className="img-five-star" />
                        </li>

                        <li className="item">
                            <input type="checkbox" className='five-star' name="five-star" id="five-star" />
                            <img src={rating4} alt="" className="img-five-star" />
                        </li>

                        <li className="item">
                            <input type="checkbox" className='five-star' name="five-star" id="five-star" />
                            <img src={rating3} alt="" className="img-five-star" />
                        </li>

                        <li className="item">
                            <input type="checkbox" className='five-star' name="five-star" id="five-star" />
                            <img src={rating2} alt="" className="img-five-star" />
                        </li>

                        <li className="item">
                            <input type="checkbox" className='five-star' name="five-star" id="five-star" />
                            <img src={rating1} alt="" className="img-five-star" />
                        </li>
                    </ul>
                </div>

                <div className="button-wrapper">
                    <button className="btn btn-apply">Apply</button>
                </div>
            </nav>
            <div className="content col-8">
                <h2>Sorry, no results were found for "DuongHoangHuy"</h2>

                <div className="img-wrapper">
                    <img src={nothing} alt="" className="img" />
                    We have all your independence Day sweets covered.
                </div>

                <div className="button-wrapper-content">
                    <button className="btn1">Sweet Cake</button>
                    <button className="btn2">Black Cake</button>
                    <button className="btn3">Pozole Verde</button>
                    <button className="btn4">Healthy Food</button>
                </div>
            </div>
        </div>
    )
}
