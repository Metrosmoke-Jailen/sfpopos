import { NavLink } from 'react-router-dom'
import RandomSpace from '../RandomSpace/RandomSpace'
import styles from './Title.module.css'

function Title() {
  return (
    <header className={styles.Title}>
      <div className={styles.brand}>
        <span className={styles.eyebrow}>SAN FRANCISCO</span>

        <h1>POPOS</h1>
      </div>

      <nav className={styles.nav}>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.navLinkActive : styles.navLink
          }
          to="/"
        >
          List
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? styles.navLinkActive : styles.navLink
          }
          to="/about"
        >
          About
        </NavLink>
      </nav>

      <div className={styles.randomSpace}>
        <RandomSpace />
      </div>
    </header>
  )
}

export default Title