import POPOSSpace from '../POPOSSpace/POPOSSpace'
import styles from './POPOSList.module.css'
import data from '../../sfpopos-data.json'
import { useState } from 'react'

function POPOSList() {
  const [query, setQuery] = useState('')

  const spaces = data
    .filter((obj) => {
      const inTitle = obj.title
        .toLowerCase()
        .includes(query.toLowerCase())

      const inAddress = obj.address
        .toLowerCase()
        .includes(query.toLowerCase())

      return inTitle || inAddress
    })
    .map((obj) => {
      const { id, title, address, images, hours } = obj

      return (
        <POPOSSpace
          id={id}
          key={`${title}-${id}`}
          name={title}
          address={address}
          image={images[0]}
          hours={hours}
        />
      )
    })

  return (
    <main className={styles.POPOSList}>
      <h1>San Francisco POPOS</h1>

      <form
        className={styles.search}
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="popos-search">
          Search POPOS spaces
        </label>

        <input
          id="popos-search"
          type="search"
          value={query}
          placeholder="Search by title or address"
          onChange={(e) => setQuery(e.target.value)}
        />

        <button type="submit">
          Search
        </button>
      </form>

      <section
        className={styles.spacesGrid}
        aria-label="POPOS spaces"
      >
        {spaces}
      </section>
    </main>
  )
}

export default POPOSList