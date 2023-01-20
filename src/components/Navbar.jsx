import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

import "./Navbar.css"

function Navbar() {

  const [search, setSearch] = useState("")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(!search) return

    navigate(`/search?q=${search}`)
    setSearch("") // limpa o campo após o redirecionamento do usuário para a página de busca com o que ele buscou
  }

  return (
    <nav id="nav-bar">
      <h2>
        <Link to="/"><BiCameraMovie/> MoviesLibrary</Link>
      </h2>
     <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Busque um filme" 
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button type="submit">
        <BiSearchAlt2 />
      </button>
     </form>
    </nav>
  )
}

export default Navbar
