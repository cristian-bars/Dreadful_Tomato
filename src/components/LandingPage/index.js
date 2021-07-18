/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import series from '../../assets/series.png';
import movies from '../../assets/movies.png';

function LandingPage() {
  return (
    <div className="content">
      <Link element={Link} to="/tvshows">
        <img className="landingImg" src={series} alt="tvShows" />
        <div className="typeTitle">Series</div>
      </Link>
      <Link element={Link} to="/movieshows">
        <img className="landingImg" src={movies} alt="movieShows" />
        <div className="typeTitle">Movies</div>
      </Link>
    </div>
  );
}

export default LandingPage;
