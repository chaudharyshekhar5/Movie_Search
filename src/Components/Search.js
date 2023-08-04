import React from 'react'
import { useGlobalContext } from './context'

function Search() {
  const {query,setQuery,Error}=useGlobalContext();
  return (
    <section className='search-section'>
      <h1 className="heading">Search your favourite movie</h1>
      <form action="#" onSubmit={(e)=>{e.preventDefault()}}>
        <div>
          <input type='text' placeholder='search your movie here' value={query} onChange={(e)=>setQuery(e.target.value)}/>
        </div>
      <div className='card-error'>
        <p>{Error.main && Error.msg}</p>
      </div>
      </form>
    </section>
  )
}

export default Search
