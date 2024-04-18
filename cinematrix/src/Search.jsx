import React from 'react'
import { useContext } from 'react'
import { AppContext } from './Context'
import { NavLink } from 'react-router-dom'

export const Search = () => {
    const {query,setQuery,isError}=useContext(AppContext)
  return (
    <section>
  <NavLink to="/">
        <div className="cinematrix-name">
          Cinematrix
        </div>
      </NavLink>


        <form action="#" onSubmit={(e)=>e.preventDefault()}>
          <div>
            <input type="text"
            placeholder='seach here'
            //value={query}
            onChange={(e)=>setQuery(e.target.value)}
            />
          </div>
        </form>
        <div className='card-error'>
            <p>{isError.show && isError.msg}</p>

        </div>
    </section>
  )
}
export default Search