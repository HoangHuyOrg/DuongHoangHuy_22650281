import React, { useState } from 'react';
import rating1 from '../../assets/images/rating_1.png';
import rating2 from '../../assets/images/rating_2.png';
import rating3 from '../../assets/images/rating_3.png';
import rating4 from '../../assets/images/rating_4.png';
import rating5 from '../../assets/images/rating_5.png';

export default function FilterRating() {
    const [selectedRating, setSelectedRating] = useState(null);

    const handleRatingChange = (event) => {
        setSelectedRating(event.target.value);
    };

    return (
        <div className="filter-rating">
            <h3>Rating</h3>
            <ul className="list-rate">
                <li className="item">
                    <input
                        type="radio"
                        name="rating"
                        id="rating-5"
                        value="5"
                        className="five-star"
                        checked={selectedRating === '5'}
                        onChange={handleRatingChange}
                    />
                    <label htmlFor="rating-5">
                        <img src={rating5} alt="Rating 5" className="img-five-star" />
                    </label>
                </li>
                <li className="item">
                    <input
                        type="radio"
                        name="rating"
                        id="rating-4"
                        value="4"
                        className="five-star"
                        checked={selectedRating === '4'}
                        onChange={handleRatingChange}
                    />
                    <label htmlFor="rating-4">
                        <img src={rating4} alt="Rating 4" className="img-five-star" />
                    </label>
                </li>
                <li className="item">
                    <input
                        type="radio"
                        name="rating"
                        id="rating-3"
                        value="3"
                        className="five-star"
                        checked={selectedRating === '3'}
                        onChange={handleRatingChange}
                    />
                    <label htmlFor="rating-3">
                        <img src={rating3} alt="Rating 3" className="img-five-star" />
                    </label>
                </li>
                <li className="item">
                    <input
                        type="radio"
                        name="rating"
                        id="rating-2"
                        value="2"
                        className="five-star"
                        checked={selectedRating === '2'}
                        onChange={handleRatingChange}
                    />
                    <label htmlFor="rating-2">
                        <img src={rating2} alt="Rating 2" className="img-five-star" />
                    </label>
                </li>
                <li className="item">
                    <input
                        type="radio"
                        name="rating"
                        id="rating-1"
                        value="1"
                        className="five-star"
                        checked={selectedRating === '1'}
                        onChange={handleRatingChange}
                    />
                    <label htmlFor="rating-1">
                        <img src={rating1} alt="Rating 1" className="img-five-star" />
                    </label>
                </li>
            </ul>
        </div>
    );
}