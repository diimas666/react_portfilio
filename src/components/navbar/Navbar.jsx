
import { NavLink } from 'react-router-dom';
import { BtnDarMode } from '../btnDarkMode/BtnDarkMode';
import './style.css';

function Navbar() {
    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/home" className="logo">
            <strong>Freelancer</strong> portfolio
          </NavLink>

          <BtnDarMode/>

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to="/home" className={({isActive}) => isActive ? activeLink : normalLink}>
                Home
              </NavLink>
            </li>

            <li className="nav-list__item">
              <NavLink to="/Projects" className={({isActive}) => isActive ? activeLink : normalLink}>
                Projects
              </NavLink>
            </li>

            <li className="nav-list__item">
              <NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : normalLink}>
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export { Navbar };
