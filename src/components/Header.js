import React from 'react'
import smartMealLogo from '../assets/Logo.png'
import '../styles/Header.css'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className='header-container'>
        <Link to='/'><img src={smartMealLogo} alt="Smart Meal Logo" className="titlelogo" /></Link>
        <h1 className="headerTitle">Smart Meal</h1>
    </div>
  )
}

export default Header