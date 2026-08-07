import { Link } from 'react-router-dom';
import { FaUsers } from "react-icons/fa";
import './Navbar.css';

// Simple site header with brand mark and a link back to the roster.
// Kept as its own component so it's easy to extend with real nav later.
function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand">
          <span className="navbar__mark">
              <FaUsers />
          </span>
          <span>User Management</span>
        </Link>
        <span className="navbar__tagline">User directory &amp; management</span>
      </div>
    </header>
  );
}

export default Navbar;
