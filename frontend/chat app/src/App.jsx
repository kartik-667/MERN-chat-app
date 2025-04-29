import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Chatpage from './Pages/Chatpage'
import Signup from './Pages/Signup'
const App = () => {
  return (
    <>
    {/* <h1>Hey wassup</h1>
     */}
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element={<Home></Home>}></Route>
      <Route path='/chat' element={<Chatpage></Chatpage>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>

     </Routes>
      

    </>
  )
}

export default App
