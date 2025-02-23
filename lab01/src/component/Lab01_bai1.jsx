import React, { useState } from 'react'

export default function Lab01_bai1() {
    const [name, setName] = useState('default')
    const [namePrint, setNamePrint] = useState('default')

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleClick = () => {
        setNamePrint(name)
    }

    return (
        <>
            <input type="text" name="input" id="input" onChange={handleChange} />
            <br />
            <button onClick={handleClick}>Click</button>
            <br />
            <div>Hello {namePrint}</div>
        </>
    )
}
