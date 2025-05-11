import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router';
import '../styles/Main.css'

const Main = () => {
  return (
    <div className='App'>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Main