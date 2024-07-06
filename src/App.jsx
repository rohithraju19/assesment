import React from 'react'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Add from './components/Add'


const App = () => {
  return (
    <>
   
    <Nav/>
    <br></br>
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/add' element={<Add item={{title:'Computer',description:'For gaming',price:'30000RS',category:'electronics'}}/>}></Route>
    </Routes>
    </>
  )
}

export default App
