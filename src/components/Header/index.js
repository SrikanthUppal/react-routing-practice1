import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <div className="nav-logo-title-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="nav-logo"
      />
      <p className="wave">Wave</p>
    </div>
    <ul className="links-list">
      <li>
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
