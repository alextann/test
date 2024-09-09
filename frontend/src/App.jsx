
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='max-w-screen-2x1 mx-auto'>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App
