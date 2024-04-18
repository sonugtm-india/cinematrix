import React from 'react'
import { useContext } from 'react'
import { AppContext } from './Context'

export const Search = () => {
    const {query,setQuery,isError}=useContext(AppContext)
  return (
    <section>
  
        <div className="cinematrix-name">
          Cinematrix
        </div>
      


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