import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Eric Zhang
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className={`nav-link ${isActive('/')}`}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className={`nav-link ${isActive('/projects')}`}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/experience" className={`nav-link ${isActive('/experience')}`}>
              Experience
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
