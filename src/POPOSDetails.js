import { useParams } from 'react-router-dom'
import data from './sfpopos-data.json'

function POPOSDetails() {

  const { id } = useParams()

  const { images, title, desc, hours, features, geo } = data[id]

  return (
    <div className="POPOSDetails">

      <img
        src={`${process.env.PUBLIC_URL}/images/${images[0]}`}
        alt={title}
      />

      <h1>{title}</h1>

      <p>{desc}</p>

      <p><strong>Hours:</strong> {hours}</p>

      <p><strong>Features:</strong> {features.join(', ')}</p>

      <p>
        <strong>Location:</strong> {geo.lat}, {geo.lon}
      </p>

    </div>
  )
}

export default POPOSDetails