import React from 'react'
import Home from './pages/Home'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import Menu from './components/Common/Menu'

const App = () => {
  return (
    <div className='container'>
      {/* <h1>Store Lisiting Assignment</h1> */}

      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/menu' element={<Menu />} />
        </Routes>

      </Router>
    </div>
  )
}
 
export default App
