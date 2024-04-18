// contextAPI= parent data can get its all childrent
// useContext()==react hooks it play role of consumer
import React, {useState } from 'react'
import { useEffect } from 'react'
const AppContext = React.createContext() // Contex(warehosue)

// provider
const AppProvider =({children})=>{
    const [isLoading,setLoading]=useState(true);
    const [movie,setMovie]=useState([])
    const [isError,setIsError]=useState({show:"false",msg:""})
    const [query,setQuery]=useState('lord of the rings')
    const API_URL=`http://www.omdbapi.com/?s=${query}&apikey=825704e1`

   
    const getMovies=async(url)=>{
        setLoading(true)
        try{
        const res=await fetch(url);
        const data=await res.json();
        console.log(data);
        if(data.Response==="True"){
            setMovie(data.Search)
            setLoading(false)
        }else{
            setIsError({show:true,msg:data.Error})
        }
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        let timer=setTimeout(()=>{
            getMovies(API_URL)
        },2000)
        return ()=>clearTimeout(timer)
    },[query]);
    return <AppContext.Provider value={{isLoading,isError,movie,query,setQuery}}>
        {children}
    </AppContext.Provider>
}
export  {AppContext,AppProvider}