import { Link } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

function Navbar() {
  return (
    <nav id="nav-bar">
      <h2>
        <Link to="/"><BiCameraMovie/> MoviesLibrary</Link>
      </h2>
     <form>
      <input type="text" placeholder="Busque um filme" />
      <button type="submit">
        <BiSearchAlt2 />
      </button>
     </form>
    </nav>
  )
}

export default Navbar
