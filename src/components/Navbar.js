import { Link } from "react-router-dom"

const Navbar = (props) => {
  return (
    <nav>
      <section>
        <Link><div>HOME</div></Link>
        <Link><div>HOME</div></Link>
        <Link><div>HOME</div></Link>
        <div>ABOUT</div>
        <div>GETTING HERE</div>
      </section>
      <div>CONTACT</div>
    </nav>
  )
}

export default Navbar
