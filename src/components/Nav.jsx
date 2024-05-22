import { Link } from 'react-router-dom';
import '../styles/Nav.css';

const menus = [
  {
    name: 'Home',
    path: '/home'
  },
  {
    name: 'Teachers',
    path: '/teachers'
  },
  {
    name: 'Holidays',
    path: '/holidays'
  },
  {
    name: 'Contact Us',
    path: '/contact-us'
  }
]

const Nav = () => {
    return (
        <nav className="navbar font-serif sticky top-0 left-0 z-50">

          <div className="logo-section">
            <img src="./images/logo.jpg" alt="school logo" width="80px" />
            <h1 className='text-[28px] font-bold'>Brighton School</h1>
          </div>

          <ul className="nav-links">
              {menus.map((menu, index) => (
                <li key={index}>
                  <Link className="nav-link" to={menu.path}> 
                    {menu.name} 
                  </Link>
                </li>
              ))}


              {/* <li><Link className="nav-link" to="/home">Home</Link></li>
              <li><Link className="nav-link" to="/home">Home</Link></li>
              <li><Link className="nav-link" to="/teachers">Teachers</Link></li>
              <li><Link className="nav-link" to="/holidays">Holidays</Link></li>
              <li><Link className="nav-link special"  to="/contact-us">Contact Us</Link></li> */}
          </ul>
        </nav>
    );
}

export default Nav;