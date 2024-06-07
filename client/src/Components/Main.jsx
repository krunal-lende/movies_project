import React, { useContext, useEffect } from 'react'
import "./Main.css";
import {BrowserRouter as Router, Routes,Route, Link} from "react-router-dom"
import Header from './Pages/header/Header';
import Home from './Pages/Home/Home';
import MovieList from './Pages/movieList/MovieList';
import MovieDetails from './Pages/moviesDetails/MovieDetails';



const Main = () => {
 
  return (
    <div className='Main-container'>
      <Router>
         <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='movie/:id' element={<MovieDetails />}/>
          <Route path='movies/:type' element={<MovieList />}/>
          <Route path='/*' element={<h2>404.., page not found </h2>}/>
        </Routes>
      </Router>
   
   
    </div>
  )
}

export default Main