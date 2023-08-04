
import React, { useContext, useEffect, useState } from 'react' 
export const Api_Url=`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_URL_KEY}`;
const AppContext=React.createContext()
const AppProvider=({children})=>{
    const [query,setQuery]=useState("")
    const [isloading,setIsloading]=useState(true)
    const [movie,setMovie]=useState([])
    const [Error,setError]=useState({main:"False",msg:""})
    const getMovies= async (url) => {
        setIsloading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data)
            if (data.Response === "True") {
                setIsloading(false)
                setMovie(data.Search);
                setError({
                    main:false,
                    msg:""
                })
            }
            else {
                setMovie([])
                setError({
                    main: true,
                    msg: data.Error,
                });
            }
        }
        catch (error) {
            console.log(error);
        }}

        useEffect(() => { getMovies(`${Api_Url}&s=${query?query:"sports"}`); }, [query])
        return <AppContext.Provider value={{ Error, isloading, movie,query,setQuery,setError }}>{children}</AppContext.Provider>;
    }
const useGlobalContext=()=>{
return useContext(AppContext)
}
export  {AppContext,AppProvider,useGlobalContext}