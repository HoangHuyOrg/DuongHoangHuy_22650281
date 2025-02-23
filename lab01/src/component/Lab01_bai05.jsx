import React, { useState } from 'react'

export default function Lab01_bai05() {
    const [valueInput, setValueInput] = useState('')
    const [list, setList] = useState([])

    const handleChange = (e) => {
        setValueInput(e.target.value)
    }

    const handleRemove = (e) => {
        // const a = [...list]
        // // setList(a)
        // console.log(a.splice(e.target.id, 1));

        const id = e.target.id
console.log(id)
        const newArr =  list.filter((item, index)=>{
            return index!=id
        })

        setList(newArr)

    }

    const handleClick = () => {
        setList([...list, valueInput])
    }

    return (
        <>
            <input type="text" name="text" id="text" onChange={handleChange} />
            <br />
            <button onClick={handleClick}>Add</button>
            <br />
            <h5>Danh Sach</h5>
            <ol>
                {
                    list.map((item, index) => {
                        return <li key={index}>{item} <button id={index} onClick={handleRemove}>remove</button></li>
                    })
                }
            </ol>
        </>
    )
}
