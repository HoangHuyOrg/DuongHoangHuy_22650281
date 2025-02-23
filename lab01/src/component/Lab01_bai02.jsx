import React, { useState } from 'react'

export default function Lab01_bai02() {
    const [valueA, setValueA] = useState()
    const [valueB, setValueB] = useState()
    const [res, setRes] = useState()

    const handleChangeA = (e) => {
        setValueA(e.target.value)
    }

    const handleChangeB = (e) => {
        setValueB(e.target.value)
    }

    const handleClick = () => {
        setRes(parseInt(valueA) + parseInt(valueB))
    }

    return (
        <>
            Num 1:
            <input type="text" name="number1" id="input" onChange={handleChangeA} />
            <br />
            Num 2:
            <input type="text" name="number2" id="input" onChange={handleChangeB} />
            <br />
            <button onClick={handleClick}>Calculate</button>
            <br />
            <div>Result:  {res}</div>
        </>
    )
}
