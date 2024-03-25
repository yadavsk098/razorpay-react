import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import PaymentSuccess from './components/PaymentSucces'
// secret =WeVuFA0MijnWwTXcIvI9xQ55
// keyid=rzp_test_1NdqZOSQdTLlim



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/paymentsuccess' element={<PaymentSuccess/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
