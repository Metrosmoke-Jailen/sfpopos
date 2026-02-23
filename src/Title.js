import './Title.css';
import { NavLink } from 'react-router-dom'

function Title() {
  return (
    <div className="Title">
      <h1>San Francisco POPOS</h1>

      <nav>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link-active" : "nav-link"
          }
          to="/"
        >
          List
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link-active" : "nav-link"
          }
          to="/about"
        >
          About
        </NavLink>
      </nav>
    </div>
  )
}

export default Title