import  { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../components/MovieCard'

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import './MovieGrid.css'

const Search = () => {

  const [searchParams] = useSearchParams()

  const [movies, setMovies] = useState([])
  const query = searchParams.get("q")

  const getSearchedMovies = async (url) => { // arrow function que busca os filmes com melhor notas da API que recebe a url da própria API

    const res = await fetch(url) // fetch busca os dados do url da API
    const data = await res.json() // transformamos os dados recebidos acima em dados JavaScript (transformando em json())

    setMovies(data.results)

  }

  useEffect(() => {

    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`

    getSearchedMovies(searchWithQueryURL)

  }, [query]) // o gatilho para o useEffect ser rodado novamente e renderizar a página novamente é quando o query for modificado

  return (
    <div className="container">
      <h2 className="title">Resultados para: <span className="query-text">{query}</span> </h2>     
      <div className="movies-container">
        {movies.length === 0 && <p>Caregando...</p>}
        {movies.length > 0 && movies.map((movie) => // se tivermos topMovies, então imprima os títulos das variáveis movie
          <MovieCard key={movie.id} movie={movie}/>
        )}
      </div>
    </div>
  )
}

export default Search