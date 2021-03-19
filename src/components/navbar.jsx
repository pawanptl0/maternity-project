import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark font-weight-bold">

      <p className="navbar-brand pt-3 text-green">Healthy Maternity</p>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">DIET</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/exercise">EXERCISE & YOGA</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/tests">TESTS</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/tips">TIPS</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/commonproblems">COMMON PROBLEMS</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
