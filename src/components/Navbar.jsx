import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    window.location.reload();
  };

  const handleScroll = (e, id) => {
    e.preventDefault();

    if (location.pathname === '/') {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { replace: false });
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleBookDemoClick = () => {
    if (currentUser) {
      navigate('/book-demo');
    } else {
      navigate('/login');
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">CodeConnect</div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>

        <li>
          <a href="/#about" onClick={(e) => handleScroll(e, 'about')}>
            About Us
          </a>
        </li>

        <li>
          <a href="/#courses" onClick={(e) => handleScroll(e, 'courses')}>
            Courses
          </a>
        </li>

        <li>
          <a href="/#placements" onClick={(e) => handleScroll(e, 'placements')}>
            Placements
          </a>
        </li>

        <li><Link to="/hire">Our Students</Link></li>

        <li>
          <a href="/#contact" onClick={(e) => handleScroll(e, 'contact')}>
            Contact Us
          </a>
        </li>

        {/* Book a Demo — always visible */}
        <li>
          <button
            onClick={handleBookDemoClick}
            className="book-demo-btn"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'inherit',
              font: 'inherit',
              padding: 0,
            }}
          >
            Book a Demo
          </button>
        </li>
      </ul>

      <div className="auth-buttons">
        {currentUser ? (
          <>
            <span>Welcome, {currentUser.name}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="login-btn">Login</Link>
            <Link to="/register" className="register-btn">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
