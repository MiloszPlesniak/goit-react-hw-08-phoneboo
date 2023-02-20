import { useSelector } from 'react-redux';
import NotLogged from 'components/NotLogged/NotLogged';
import UserMenu from 'components/UserMenu/UserMenu';
import { selectIsLoggedIn } from 'redux/auth/selectors';
const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return <nav>{isLoggedIn ? <UserMenu /> : <NotLogged />}</nav>;
};
export default Navigation;
