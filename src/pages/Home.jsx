import { useState, useEffect } from 'react'

import MovieCard from '../components/MovieCard'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {

  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url) => { // arrow function que busca os filmes com melhor notas da API que recebe a url da própria API

    const res = await fetch(url) // fetch busca os dados do url da API
    const data = await res.json() // transformamos os dados recebidos acima em dados JavaScript (transformando em json())

    setTopMovies(data.results)

  }

  useEffect(() => {

    const topRatedUrl = `${moviesURL}top_rated?${apiKey}` // forma o endereço da url para pegarmos os "top rated" filmes da api (o top_rated após a url padrão do arquivo .env estava na documentação da API para acessarmos esses filmes específicos)

    getTopRatedMovies(topRatedUrl)

  }, [])

  return (
    <div className="container">
      <h2 className="title">Melhores Filmes:</h2>      
      <div className="movies-container">
        {topMovies.length === 0 && <p>Caregando...</p>}
        {topMovies.length > 0 && topMovies.map((movie) => // se tivermos topMovies, então imprima os títulos das variáveis movie
          <MovieCard key={movie.id} movie={movie}/>
        )}
      </div>
    </div>
  )
}

export default Home
