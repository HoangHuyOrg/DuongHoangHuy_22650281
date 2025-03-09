import React, { useState } from 'react';

export default function FilterType() {
    // Khởi tạo state để lưu trạng thái của từng checkbox
    const [checkboxState, setCheckboxState] = useState({
        panFriedLeft: false,
        grilledLeft: false,
        sauteedLeft: false,
        steamedLeft: false,
        panFriedRight: false,
        grilledRight: false,
        sauteedRight: false,
        steamedRight: false,
    });

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckboxState((prevState) => ({
            ...prevState,
            [name]: checked,
        }));
    };

    return (
        <div className="filter-type">
            <h3>Type</h3>
            <form action="" className="form-type">
                <ul className="type-left col-6">
                    <li className="item">
                        <input
                            type="checkbox"
                            name="panFriedLeft"
                            id="pan-fried-left"
                            className="item"
                            checked={checkboxState.panFriedLeft}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="pan-fried-left">Pan-fried</label>
                    </li>
                    <li className="item">
                        <input
                            type="checkbox"
                            name="grilledLeft"
                            id="grilled-left"
                            className="item"
                            checked={checkboxState.grilledLeft}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="grilled-left">Grilled</label>
                    </li>
                    <li className="item">
                        <input
                            type="checkbox"
                            name="sauteedLeft"
                            id="sauteed-left"
                            className="item"
                            checked={checkboxState.sauteedLeft}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="sauteed-left">Sautéed</label>
                    </li>
                    <li className="item">
                        <input
                            type="checkbox"
                            name="steamedLeft"
                            id="steamed-left"
                            className="item"
                            checked={checkboxState.steamedLeft}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="steamed-left">Steamed</label>
                    </li>
                </ul>
                <ul className="type-right col-6">
                    <li className="item">
                        <input
                            type="checkbox"
                            name="panFriedRight"
                            id="pan-fried-right"
                            className="item"
                            checked={checkboxState.panFriedRight}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="pan-fried-right">Pan-fried</label>
                    </li>
                    <li className="item">
                        <input
                            type="checkbox"
                            name="grilledRight"
                            id="grilled-right"
                            className="item"
                            checked={checkboxState.grilledRight}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="grilled-right">Grilled</label>
                    </li>
                    <li className="item">
                        <input
                            type="checkbox"
                            name="sauteedRight"
                            id="sauteed-right"
                            className="item"
                            checked={checkboxState.sauteedRight}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="sauteed-right">Sautéed</label>
                    </li>
                    <li className="item">
                        <input
                            type="checkbox"
                            name="steamedRight"
                            id="steamed-right"
                            className="item"
                            checked={checkboxState.steamedRight}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="steamed-right">Steamed</label>
                    </li>
                </ul>
            </form>
        </div>
    );
}