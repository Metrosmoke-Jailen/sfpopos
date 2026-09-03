import { useNavigate } from 'react-router-dom'
import data from '../../sfpopos-data.js'
import styles from './RandomSpace.module.css'

function RandomSpace() {
  const navigate = useNavigate()

  const handleClick = () => {
    const id = Math.floor(Math.random() * data.length)
    navigate(`/details/${id}`)
  }

  return (
    <button
      className={styles.RandomSpace}
      onClick={handleClick}
    >
      Show me a random space
    </button>
  )
}

export default RandomSpace