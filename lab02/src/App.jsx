import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import RecipeBox from './components/RecipeBox'

function App() {
  const [count, setCount] = useState(0)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fn = fetch("https://67cd3557dd7651e464eda3cf.mockapi.io/header")
    .then((r) => r.json())
    .then((d) => {
      setCategories(d)
    })
    
  }, [])

  return (
    <div className="container">
      <Header categories={categories}></Header>
      {/* <Body></Body> */}
      <RecipeBox />
      <Footer></Footer>
    </div>
  )
}

export default App
