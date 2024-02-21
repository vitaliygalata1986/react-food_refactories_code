import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="green darken-1">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          React Shop
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/random">Random Product</Link>
          </li>
          <li>
            <Link to="/search">Search Product</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
