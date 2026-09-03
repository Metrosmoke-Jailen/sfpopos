import POPOSFeature from '../POPOSFeature/POPOSFeature.js'
import styles from './POPOSFeatureList.module.css'

function POPOSFeatureList(props) {
  const icons = props.features.map((feature) => {
    return <POPOSFeature key={feature} name={feature} />
  })

  return (
    <div className={styles.POPOSFeatureList}>
      {icons}
    </div>
  )
}

export default POPOSFeatureList
