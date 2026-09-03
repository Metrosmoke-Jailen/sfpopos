import styles from './About.module.css'

function About() {
  return (
    <main className={styles.About}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>SAN FRANCISCO</p>

        <h1>Discover POPOS</h1>

        <p className={styles.intro}>
          Privately Owned Public Open Spaces are places throughout
          San Francisco that are privately owned but open for the
          public to enjoy.
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles.section}>
          <h2>What are POPOS?</h2>

          <p>
            POPOS are publicly accessible spaces created and maintained
            by private developers and property owners. They can include
            plazas, gardens, terraces, rooftop spaces, atriums, and
            other places where people can relax, explore, or take a
            break from the city.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Explore San Francisco</h2>

          <p>
            This site makes it easier to discover these hidden pockets
            of public space throughout San Francisco. Search by name or
            address, explore individual locations, and find a space that
            fits your next adventure.
          </p>
        </div>

        <div className={styles.section}>
          <h2>What you can find</h2>

          <div className={styles.features}>
            <div className={styles.feature}>
              <span>🌲</span>
              <div>
                <h3>Outdoor Spaces</h3>
                <p>Find places to enjoy fresh air and the city.</p>
              </div>
            </div>

            <div className={styles.feature}>
              <span>☕</span>
              <div>
                <h3>Coffee</h3>
                <p>Discover spaces with nearby coffee options.</p>
              </div>
            </div>

            <div className={styles.feature}>
              <span>🖼️</span>
              <div>
                <h3>Art</h3>
                <p>Explore spaces featuring art and culture.</p>
              </div>
            </div>

            <div className={styles.feature}>
              <span>🔌</span>
              <div>
                <h3>Power</h3>
                <p>Find locations where you can plug in and stay productive.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About