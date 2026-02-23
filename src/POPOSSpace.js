import { Link } from 'react-router-dom'
import './POPOSSpace.css'

function POPOSSpace(props) {
  
  const { name, image, address, hours, id } = props

  return (
    <div className="POPOSSpace">

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

      <p>{address}</p>
      <p><strong>Hours:</strong> {hours}</p>

    </div>
  )
}

export default POPOSSpace