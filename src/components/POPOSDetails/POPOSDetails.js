import { useParams } from 'react-router-dom'
import data from '../../sfpopos-data.json'
import './POPOSDetails.css'
import POPOSFeatureList from '../POPOSFeatureList/POPOSFeatureList'

function POPOSDetails(props) {
  const params = useParams()
  const { id } = params
  const { images, title, desc, hours, features, geo } = data[id]

  return (
    <div className="POPOSDetails">
      <div className="POPOSDetails-image">
        <img
          src={`/images/${images[0]}`}
          alt={title}
        />
      </div>

      <div className="POPOSDetails-info">
        <h1 className="POPOSDetails-title">{title}</h1>
        <p className="POPOSDetails-desc">{desc}</p>
        <p className="POPOSDetails-hours">{hours}</p>
        
        <POPOSFeatureList features={features} />
        
        <p className="POPOSDetails-geo">
          {geo.lat} {geo.lon}
        </p>
      </div>
    </div>
  )
}

export default POPOSDetails