import { NavLink } from 'react-router-dom'
import styles from './Footer.module.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.Footer}>
      <span>Jailen Truitt © {year}</span>

      <NavLink to="/about">
        About
      </NavLink>

      <NavLink to="/contact">
        Contact
      </NavLink>

      <NavLink to="/map">
        Map
      </NavLink>
    </footer>
  )
}

export default Footer