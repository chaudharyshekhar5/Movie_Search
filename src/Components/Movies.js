import React from 'react'
import { useGlobalContext } from './context'
import { NavLink } from 'react-router-dom'

function Movies() {
    const {movie,isloading}=useGlobalContext()
    if (isloading){
      return (
        <div>
          <div className='loading'>
             Loading...
          </div>
        </div>      )
    }
  return <div>
    
    <section className="movie-page">
        <div className='container grid grid-4-col'>
      {movie.map((Curmovie)=>{
        const {imdbID,Poster,Title}=Curmovie;
        const Titlelen=Title.substring(0,15)
        return (
        <NavLink to={`movies/${imdbID}`} key={imdbID}>
            <div className='card'>
                <div className='card-info'>
                    <h2>
                        {Title.length>15?`${Titlelen}...`:Titlelen}           
                   </h2>
                   <img src={Poster==="N/A"?"https://m.media-amazon.com/images/M/MV5BYTYwZGZhODAtNTMyOC00MTFkLWJhNWEtOWI5ZjMxN2IwOWEyXkEyXkFqcGdeQXVyMjg0Mjg1MDM@._V1_SX300.jpg":Poster}/>
                </div>
            </div>
        </NavLink>)
      })}
      </div>
    </section>
    
    </div>
}

export default Movies
