import { Link } from '@rturnq/solid-router';
import './NavBar.scss';

const NavBar = () => {
  return (
    <nav className="navbar-items-container">
      <div className="navbar-items">
        <img src="src/assets/Img/logo.svg" className="navbar-logo" />
        <div className="menu-icon"></div>
        <div className="nav-menu">
          <div className="nav-link-container">
            <img
              src="src/assets/Icons/home.svg"
              alt="navIcon"
              className="nav-icon"
            />
            <Link className="nav-link" href="/">
              الرئيسية
            </Link>
          </div>
          <div className="nav-link-container">
            <img
              src="src/assets/Icons/videos.svg"
              alt="navIcon"
              className="nav-icon"
            />
            <Link className="nav-link" href="/">
              فيديوهات
            </Link>
          </div>
          <div className="nav-link-container">
            <img
              src="src/assets/Icons/distributors.svg"
              alt="navIcon"
              className="nav-icon"
            />
            <Link className="nav-link" href="/">
              الموزعين
            </Link>
          </div>
          <div className="nav-link-container">
            <img
              src="src/assets/Icons/services.svg"
              alt="navIcon"
              className="nav-icon"
            />
            <Link className="nav-link" href="/">
              خدماتنا
            </Link>
          </div>
          <div className="nav-link-container">
            <img
              src="src/assets/Icons/support.svg"
              alt="navIcon"
              className="nav-icon"
            />
            <Link className="nav-link" href="/support">
              الدعم
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
