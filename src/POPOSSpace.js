function POPOSSpace(props) {
  const { name, image, address, hours } = props

  return (
    <div className="POPOSSpace">
      <img
        src={`${process.env.PUBLIC_URL}/images/${image}`}
        alt={name}
      />
      <h1>{name}</h1>
      <div>{address}</div>
      <div className="POPOSSpace-hours">{hours}</div>
    </div>
  )
}

export default POPOSSpace