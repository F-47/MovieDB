import React, { useState, useContext } from 'react'
import useFetch from './useFetch'

let AppContext = React.createContext()

let AppProvider = ({ children }) => {
  let [isLoading, setIsLoading] = useState(false)
  let [searchedWord,setSearchedWord] = useState("batman")
  let {data} = useFetch("&s="+searchedWord)
  
  return <AppContext.Provider value={{data,isLoading,searchedWord,setIsLoading,setSearchedWord}}>{children}</AppContext.Provider>
}

export let useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
