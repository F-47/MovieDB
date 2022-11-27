import  { useState, useEffect } from 'react'
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=b0337b7`

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  
  const fetchMovies = async (url) => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (data.Response === 'True') {
        setData(data.Search || data)
      }
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}`)
  }, [urlParams])
  return { isLoading, data }
}

export default useFetch
