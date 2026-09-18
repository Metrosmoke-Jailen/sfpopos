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
    <article className={styles.POPOSSpace}>
      <figure>
        <Link to={`/details/${id}`}>
          <img
            src={`${process.env.PUBLIC_URL}/images/${image}`}
            alt={`${name}, a privately owned public open space in San Francisco`}
          />
        </Link>

        <figcaption>{name}</figcaption>
      </figure>

      <h2>
        <Link to={`/details/${id}`}>
          {name}
        </Link>
      </h2>

      <button
        className={styles.toggleButton}
        type="button"
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
    </article>
  )
}

export default POPOSSpace