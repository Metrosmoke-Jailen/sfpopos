import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './POPOSSpace.module.css'

function POPOSSpace(props) {
  const { name, image, address, hours, id } = props

  const [isOpen, setIsOpen] = useState(false)

  const toggleDetails = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.POPOSSpace}>

      <Link to={`/details/${id}`}>
        <img
          src={`${process.env.PUBLIC_URL}/images/${image}`}
          alt={name}
        />
      </Link>

      <h1>
        <Link to={`/details/${id}`}>
          {name}
        </Link>
      </h1>

      <button
        className={styles.toggleButton}
        onClick={toggleDetails}
        aria-expanded={isOpen}
        aria-controls={`details-${id}`}
      >
        {isOpen ? 'Hide Details ▲' : 'Show Details ▼'}
      </button>

      <div
        id={`details-${id}`}
        className={`${styles.details} ${
          isOpen ? styles.detailsOpen : ''
        }`}
      >
        <p>{address}</p>

        <p>
          <strong>Hours:</strong> {hours}
        </p>
      </div>

    </div>
  )
}

export default POPOSSpace