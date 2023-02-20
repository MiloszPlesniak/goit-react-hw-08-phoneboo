import { NavLink } from 'react-router-dom';

const NotLogged = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">LogIn</NavLink>
      </li>
    </ul>
  );
};
export default NotLogged;
