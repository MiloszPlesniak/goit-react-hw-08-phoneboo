import { NavLink } from 'react-router-dom';
import css from './NotLogged.module.css';
const NotLogged = () => {
  return (
    <ul className={css.navList}>
      <li className={css.navItem}>
        <NavLink style={{ textDecoration: 'none' }} to="/">
          Home
        </NavLink>
      </li>
      <li className={css.navItem}>
        <NavLink style={{ textDecoration: 'none' }} to="/register">
          Register
        </NavLink>
      </li>
      <li className={css.navItem}>
        <NavLink style={{ textDecoration: 'none' }} to="/login">
          LogIn
        </NavLink>
      </li>
    </ul>
  );
};
export default NotLogged;
