import { Link } from 'react-router-dom';
import './topbar.css';

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topleft">
        <i className="topicon fa-brands fa-facebook"></i>
        <i className="topicon fa-brands fa-instagram"></i>
        <i className="topicon fa-brands fa-twitter"></i>
        <i className="topicon fa-brands fa-pinterest"></i>
      </div>
      <div className="topcenter">
        <ul className="toplist">
          <li className="toplist-item">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="toplist-item">
            <Link to="/" className="link">
              About
            </Link>
          </li>
          <li className="toplist-item">
            <Link to="/" className="link">
              Contact
            </Link>
          </li>
          <li className="toplist-item">
            <Link to="/write" className="link">
              Write
            </Link>
          </li>
          <li className="toplist-item">{user && 'Logout'}</li>
        </ul>
      </div>
      <div className="topright">
        {user ? (
          <Link to="/settings">
            <img
              className="topimg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="profile"
            />
          </Link>
        ) : (
          <ul className="toplist">
            <li className="toplist-item">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="toplist-item">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}

        <i className="topsearch-icon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
