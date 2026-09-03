import { NavLink } from 'react-router-dom'
import styles from './Footer.module.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <div className={styles.Footer}>
      <span>Jailen Truitt © {year}</span>

      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/map">Map</NavLink>
    </div>
  )
}

export default Footer
