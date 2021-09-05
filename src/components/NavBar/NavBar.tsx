import { Link } from '@rturnq/solid-router';
import './NavBar.scss';

const NavBar = () => {
  return (
    <nav className="navbar-items-container">
      <div className="navbar-items">
        <h1 className="navbar-logo">React</h1>
        <div className="menu-icon"></div>
        <div className="nav-menu">
          <div className="nav-link-container">
            <Link className="nav-link" href="/">
              الرئيسية
            </Link>
          </div>
          <Link className="nav-link" href="/">
            فيديوهات
          </Link>
          <Link className="nav-link" href="/">
            الموزعين
          </Link>
          <Link className="nav-link" href="/">
            خدماتنا
          </Link>
          <Link className="nav-link" href="/">
            الدعم
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
