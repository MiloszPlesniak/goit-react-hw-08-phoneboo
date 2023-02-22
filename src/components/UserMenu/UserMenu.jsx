import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { logOut } from 'redux/auth/thunk';
import { selectUserData } from 'redux/auth/selectors';
const UserMenu = () => {
  const dispatch = useDispatch();

  const { name } = useSelector(selectUserData);

  const logout = () => {
    dispatch(logOut());
  };

  return (
    <ul className={css.userMenu}>
      <li>
        <p>{name}</p>
      </li>
      <li>
        <NavLink to="/contacts">Contacts</NavLink>
      </li>
      <li>
        <button onClick={logout}>LogOut</button>
      </li>
    </ul>
  );
};
export default UserMenu;
