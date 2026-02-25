import { useNavigate } from 'react-router-dom'
import data from '../../sfpopos-data.js'
import './RandomSpace.css'

function RandomSpace() {
  const navigate = useNavigate()

  const handleClick = () => {
    const id = Math.floor(Math.random() * data.length)
    navigate(`/details/${id}`)
  }

  return (
    <button
      className="RandomSpace"
      onClick={handleClick}
    >
      Show me a random space
    </button>
  )
}

export default RandomSpace