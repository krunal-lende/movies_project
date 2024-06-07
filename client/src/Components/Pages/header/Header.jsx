import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import homeImg from "../../Assets/148837-ffffff.svg";

const Header = () => {
  return (
    <div className='header'>
        <div className="headerLeft">
            <Link className='btn' to="/"><img src={homeImg} alt="" className='header_icon'/></Link>
            <Link className='btn' to='/movies/popular'><span>Popular</span></Link>
            <Link className='btn' to='/movies/top_rated'><span>Top Rated</span></Link>
            <Link className='btn' to='/movies/upcoming'><span>Upcoming</span></Link>
            
        </div>

    </div>
  )
}

export default Header