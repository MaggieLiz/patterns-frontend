import { Link } from 'react-router-dom'

function Navbar(){
  return (
    <nav className="navbar is-fixed-top is-light">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item is-size-4">
            Home
          </Link>
          <Link to="/patterns" className="navbar-item is-size-4">
            Patterns
          </Link>
          <Link to="/patterns/new" className="navbar-item is-size-4">
            Add New Pattern
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar