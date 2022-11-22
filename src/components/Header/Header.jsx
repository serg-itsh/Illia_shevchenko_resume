import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

import Sprite from '../../images/logo/logo-illia.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div>
            <svg className={styles.logo}>
             
              <use href={`${Sprite}#icon-logo-illia`}></use>
            </svg>
          </div>
          {/* nav */}
          <div className={styles.nav_wrapper}>
            <NavLink
              to="/"
              exact={true}
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
