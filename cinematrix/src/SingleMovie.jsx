import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from './Context';

const SingleMovie = () => {
    const { id } = useParams();
    const { movie } = useContext(AppContext);

    // Find the movie with matching IMDb ID
    const selectedMovie = movie.find(item => item.imdbID === id);

    if (!selectedMovie) {
        return <div>Loading...</div>; // or handle error when movie is not found
    }

    const { Title, Poster, Type, Year } = selectedMovie;
     const movieName=Title.substring(15);

    return (
      <div className='dialog-container'>
        <div className='dialog-box'>
        <div className="single-movie">
            <h2>{ movieName.length <15?Title:movieName+'...'}</h2>
            <img src={Poster} alt={Title} />
            <p>Type: {Type}</p>
            <p>Year: {Year}</p>
        </div>
        </div>
        </div>
    );
};

export default SingleMovie;
