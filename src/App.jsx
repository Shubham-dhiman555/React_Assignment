import { useState } from 'react'


import './App.css'
import Navbar from './components/navbar'
import Form from './components/form'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {


  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <Form />
      
    </div>
  )
}

export default App
