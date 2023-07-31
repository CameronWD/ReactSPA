import React, { useState } from 'react'
import Home from './Home'
import CategorySelection from './CategorySelection'
import NewEntry from './NewEntry'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './NavBar'

const App = () => {
  const [entries, setEntries] = useState([])

  return (
    <>
      <BrowserRouter> 
        <NavBar />
        <Routes> 
          <Route path='/' element={<Home />} />
          <Route path='/category' element={<CategorySelection />} />
          <Route path='/entry'>
            {/* colon prefix makes it dynamic parameter */}
            <Route path='new/:category' element ={<NewEntry entries={entries} setEntries={setEntries} />} />
          </Route>
          <Route path='*' element={<h3> Page not found</h3>} />
        </Routes>
      </BrowserRouter>
      {/* <Home />
      <CategorySelection />
      <NewEntry /> */}
    </>

  )
}

export default App