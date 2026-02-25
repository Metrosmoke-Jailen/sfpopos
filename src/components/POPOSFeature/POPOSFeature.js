import './POPOSFeature.css'

function getFeature(str) {
  switch (str) {
    case 'outdoors':
      return '🌲'
    case 'coffee':
      return '☕️'
    case 'art':
      return '🖼'
    case 'toilet':
      return '🚽'
    case 'power':
      return '🔌'
    default:
      return '❓'
  }
}

function POPOSFeature(props) {
  const emoji = getFeature(props.name)
  return (
    <div className="POPOSFeature" title={props.name}>
      {emoji}
    </div>
  )
}

export default POPOSFeature