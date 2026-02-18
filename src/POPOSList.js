import POPOSSpace from './POPOSSpace';

function POPOSList() {
  return (
    <div>
      <h1>Keep your eye on this space for future content...</h1>
    </div>
  )
}

function POPOSList() {
  return (
    <div className="POPOSList">
      <POPOSSpace
        name="50 California Street"
        address="50 California St."
        image="50-california-st.jpg"
      />
      <POPOSSpace />
      <POPOSSpace />
      <POPOSSpace />
      <POPOSSpace />
      <POPOSSpace />
    </div>
  )
}

export default POPOSList
