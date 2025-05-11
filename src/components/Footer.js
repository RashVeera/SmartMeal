import React from 'react'
import '../styles/Footer.css'
import instagram from '../assets/instagram.jpg'
import youtube from '../assets/youtube.png'
import facebook from '../assets/facebook.png'       
const Footer = () => {
  return (
    <div>
        <span>  Smart Meal 2025 &copy; All rights reserved </span>
        <br/>
        <div className='socialHandlesContainer'> 
            <span>Follow us on :</span> 
            <a href="https://www.instagram.com/ajitha._.v72/" target="_blank" rel="noopener noreferrer"><img className='socialHandles' src={instagram} alt='instaImage'/></a>
            <a href="https://www.facebook.com/ajitha.v.37853" target="_blank" rel="noopener noreferrer"><img className='socialHandles'  src={facebook} alt='fbImage'/></a>
            <a href="https://www.youtube.com/playlist?app=desktop&list=PLFcCGmsqrrh5lm7jOy1hIuGRbFwOchHSu" target="_blank" rel="noopener noreferrer"><img className='socialHandles'  src={youtube} alt='YoutubeImage'/></a>
        
        </div>
    </div>
  )
}

export default Footer