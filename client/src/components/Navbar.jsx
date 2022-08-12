import { NavLink, Link } from 'react-router-dom'

export const Navbar = () => {

  return (
    <nav>
      <h1>This is the Navbar</h1>
      <div id="logo">
        <Link to="/">Skim</Link>
      </div>
      <div className='nav-links'>
        <NavLink to='/' className={({ isActive }) =>
          isActive ? "active" : undefined}>Home</NavLink>
        <NavLink to='/about' className={({ isActive }) =>
          isActive ? "active" : undefined}>About</NavLink>
      </div>
    </nav>
  )
}
