import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <div className="Footer">
      Jailen Truitt © {year}
      <a href="#">About</a>
      <a href="#">Contact</a>
      <a href="#">Map</a>
    </div>
  )
}

export default Footer