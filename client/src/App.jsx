import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import {BroswerRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>
      <BroswerRouter>
      <Routes>
      <Route path='/register' element={<Signup/>}></Route>
      <Route path='/login' element={<Signup/>}></Route>
      </Routes>
      </BroswerRouter>
    </>
  )
}

export default App
