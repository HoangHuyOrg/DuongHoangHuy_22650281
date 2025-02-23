import React, { useState } from 'react'

export default function Lab01_bai03() {
    const [valueA, setValueA] = useState()
    const [valueB, setValueB] = useState()
    const [res, setRes] = useState()

    const [operation, setOperation] = useState('add')

    const handleChangeA = (e) => {
        setValueA(e.target.value)
    }

    const handleChangeB = (e) => {
        setValueB(e.target.value)
    }

    const handleChangeRadio = (e) => {
        setOperation(e.target.value)
    }

    const handleClick = (e) => {
        let result = ''

        if (operation === 'add') {
            result = parseInt(valueA) + parseInt(valueB)
        }
        else if (operation === 'substract') {
            result = parseInt(valueA) - parseInt(valueB)
        }
        else if (operation === 'multiply') {
            result = parseInt(valueA) * parseInt(valueB)
        }
        else if (operation === 'divide') {
            if (valueB != 0) {
                result = parseInt(valueA) / parseInt(valueB)
            }
            else {
                result = 'Khong The Thuc Hien Phep Chia Cho 0'
            }
        }

        console.log(result);
        setRes(result)
    }

    return (
        <>
            Num 1:
            <input type="text" name="number1" id="input" onChange={handleChangeA} />
            <br />
            Num 2:
            <input type="text" name="number2" id="input" onChange={handleChangeB} />
            <br />
            <label >
                <input type="radio" name="operation" value={"add"} id="add" checked={operation === 'add'} onChange={handleChangeRadio} />
                {"Add (+)"}
            </label>
            <br />
            <label >
                <input type="radio" name="operation" value={"substract"} id="substract" checked={operation === 'substract'} onChange={handleChangeRadio} />
                {"Substract (-)"}
            </label>
            <br />
            <label >
                <input type="radio" name="operation" value={"multiply"} id="multiply" checked={operation === 'multiply'} onChange={handleChangeRadio} />
                {"Multiply (*)"}
            </label>
            <br />
            <label >
                <input type="radio" name="operation" value={"divide"} id="divide" checked={operation === 'divide'} onChange={handleChangeRadio} />
                {"Divide (/)"}
            </label>
            <br />
            <button onClick={handleClick}>Calculate</button>
            <br />
            <div>Result:  {res}</div>
        </>
    )
}
