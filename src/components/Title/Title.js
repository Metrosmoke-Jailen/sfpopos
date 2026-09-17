import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import RandomSpace from '../RandomSpace/RandomSpace'
import styles from './Title.module.css'

function Title() {
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      )
    }
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header
      className={styles.Title}
      ref={headerRef}
    >
      <div className={styles.brand}>
        <span className={styles.eyebrow}>
          SAN FRANCISCO
        </span>

        <h1>POPOS</h1>
      </div>

      <button
        className={`${styles.menuButton} ${
          menuOpen ? styles.menuButtonOpen : ''
        }`}
        aria-label={
          menuOpen
            ? 'Close navigation menu'
            : 'Open navigation menu'
        }
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav
        id="main-navigation"
        className={`${styles.nav} ${
          menuOpen ? styles.navOpen : ''
        }`}
        aria-hidden={!menuOpen}
      >
        <NavLink
          className={({ isActive }) =>
            isActive
              ? styles.navLinkActive
              : styles.navLink
          }
          to="/"
          onClick={closeMenu}
        >
          List
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? styles.navLinkActive
              : styles.navLink
          }
          to="/about"
          onClick={closeMenu}
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