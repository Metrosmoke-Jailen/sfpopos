import { Link, useParams } from 'react-router-dom'
import data from '../../sfpopos-data.json'
import styles from './POPOSDetails.module.css'
import POPOSFeatureList from '../POPOSFeatureList/POPOSFeatureList'

function POPOSDetails() {
  const { id } = useParams()
  const { images, title, desc, hours, features, geo, address } = data[id]

  return (
    <main className={styles.POPOSDetails}>
      <Link to="/" className={styles.backLink}>
        ← Back to POPOS
      </Link>

      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={`${process.env.PUBLIC_URL}/images/${images[0]}`}
            alt={title}
          />
        </div>

        <div className={styles.info}>
          <div className={styles.heading}>
            <p className={styles.eyebrow}>San Francisco POPOS</p>

            <h1 className={styles.title}>
              {title}
            </h1>
          </div>

          <div className={styles.divider} />

          <section className={styles.section}>
            <h2>About this space</h2>
            <p className={styles.description}>
              {desc}
            </p>
          </section>

          {address && (
            <section className={styles.section}>
              <h2>Location</h2>
              <p className={styles.address}>
                📍 {address}
              </p>
            </section>
          )}

          <section className={styles.section}>
            <h2>Hours</h2>
            <p className={styles.hours}>
              🕐 {hours}
            </p>
          </section>

          <section className={styles.section}>
            <h2>Features</h2>
            <POPOSFeatureList features={features} />
          </section>

          <section className={styles.coordinates}>
            <div>
              <span>Latitude</span>
              <strong>{geo.lat}</strong>
            </div>

            <div>
              <span>Longitude</span>
              <strong>{geo.lon}</strong>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default POPOSDetails