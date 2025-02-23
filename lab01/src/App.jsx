import { useState } from 'react'
import './App.css'
import Lab01_bai02 from './component/Lab01_bai02'
import Lab01_bai1 from './component/lab01_bai1'
import Lab01_bai03 from './component/Lab01_bai03'
import Lab01_bai05 from './component/Lab01_bai05'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Bai 01</h1>
    <Lab01_bai1 />
    <h1>Bai 02</h1>
    <Lab01_bai02 />
    <h1>Bai 03</h1>
    <Lab01_bai03 />
    <h1>Bai 05</h1>
    <Lab01_bai05 />
    </>
  )
}

export default App
