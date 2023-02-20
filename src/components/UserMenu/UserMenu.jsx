import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { logOut } from 'redux/auth/slice';
import {selectUserData } from 'redux/auth/selectors';
const UserMenu = () => {

  const dispatch = useDispatch()
  
  const userName=useSelector(selectUserData).name
  
  
  const logOutOfApi = () => {
    dispatch(logOut())
    
  }


  return (
    <ul className={css.userMenu}>
      <li><p>{userName}</p></li>
      <li>
        <NavLink to="/contacts">Contacts</NavLink>
      </li>
      <li>
        <button onClick={logOutOfApi}>LogOut</button>
      </li>
    </ul>
  );
};
export default UserMenu;
