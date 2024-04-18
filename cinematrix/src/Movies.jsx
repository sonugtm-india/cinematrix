import React from 'react'
import { AppContext } from './Context'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
export const Movies = () => {
    const {movie,isLoading}=useContext(AppContext)
    if(isLoading){
        return (
            <div className='movie-section'>
                <div className='loading'>Loading...</div>
            </div>
        )
    }
  return (
     <section className='movie-page'>
       <div className="grid grid-4-col">
        {movie.map((currMovie)=>{
            const {imdbID,Title,Poster}=currMovie;
            const movieName=Title.substring(15);
            return <NavLink to ={`movie/${imdbID}`} key={imdbID}>
                <div className="card">
                    <div className='card-info'>
                        <div className='movie-title'>{movieName.length <15?Title:movieName+'...'}</div> 
                        <img src={Poster} alt={imdbID}/>
                    </div>
                </div>

            </NavLink>
        })}

       </div>
    </section>)
}
export default Movies
