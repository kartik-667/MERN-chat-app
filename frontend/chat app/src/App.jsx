import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Chatpage from './Pages/Chatpage'
const App = () => {
  return (
    <>
    {/* <h1>Hey wassup</h1>
     */}
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/chat' element={<Chatpage></Chatpage>}></Route>

     </Routes>
      

    </>
  )
}

export default App
