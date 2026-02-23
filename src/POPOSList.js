import POPOSSpace from './POPOSSpace'
import './POPOSList.css'
import data from './sfpopos-data.json'
import { useState } from 'react'

function POPOSList() {
  const [query, setQuery] = useState('')

  const spaces = data
    .filter((obj) => {
      const inTitle = obj.title.toLowerCase().includes(query.toLowerCase())
      const inAddress = obj.address.toLowerCase().includes(query.toLowerCase())
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
    <div className="POPOSList">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          value={query}
          placeholder="Search by title or address"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {spaces}
    </div>
  )
}

export default POPOSList
