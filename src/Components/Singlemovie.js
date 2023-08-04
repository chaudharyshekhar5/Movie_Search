import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useState,useEffect,useContext } from 'react'
import { Api_Url } from './context'
import { AppContext } from './context'

function Singlemovie() {
    const {id}=useParams()
    const [isloading,setIsloading]=useState(true)
    const [movie,setMovie]=useState([])
    const getMovies= async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            if (data.Response === "True") {
                setIsloading(false)
                setMovie(data)
            }
        }
        catch (error) {
        
        }}

        useEffect(() => { getMovies(`${Api_Url}&i=${id}`); }, [id])
        if(isloading){
            return(
                <div className='movie-section'>
                    <div className='loading'>
                         Loading...
                    </div>
                </div>
            )
        }
        return(<>
            <section className='movie-section'>
                <div className='movie-card'>
                    <figure>
                    <img src={movie.Poster==="N/A"?"https://m.media-amazon.com/images/M/MV5BYTYwZGZhODAtNTMyOC00MTFkLWJhNWEtOWI5ZjMxN2IwOWEyXkEyXkFqcGdeQXVyMjg0Mjg1MDM@._V1_SX300.jpg":movie.Poster}/>
                    </figure>
                    <div className='card-content'>
                        <p className='title'  style={{color:"red"}}>Title =   {movie.Title}</p>
                        <p className='card-text' style={{color:"green"}}>Released_Date :   {movie.Released}</p>
                        <p className='card-text' style={{color:"green"}}>Type :   {movie.Genre}</p>
                        <p className='card-text' style={{color:"green"}}>Rating :   {movie.imdbRating}</p>
                        <p className='card-text' style={{color:"green"}}>Country :   {movie.Country}</p>
                        <NavLink to="/" style={{border:"2px solid violet",padding:"8px",color:"red",backgroundColor:"hwb(208 69% 7%)"}}> Go back</NavLink>
                    </div>
                </div>
            </section>
            </>
        )
}

export default Singlemovie
