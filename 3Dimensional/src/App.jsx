
import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginpage from './Loginpage';
function App() {
 
  return (
    <>
    <Router>
      <Routes>
      <Route path="/signin" element={<Loginpage/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
