import POPOSFeature from '../POPOSFeature/POPOSFeature.js'
import styles from './POPOSFeatureList.module.css'

function POPOSFeatureList(props) {
  return (
    <ul className={styles.POPOSFeatureList}>
      {props.features.map((feature) => (
        <li key={feature}>
          <POPOSFeature name={feature} />
        </li>
      ))}
    </ul>
  )
}

export default POPOSFeatureList