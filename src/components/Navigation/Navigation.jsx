import { useSelector } from 'react-redux';
import NotLogged from 'components/NotLogged/NotLogged';

import { selectIsLoggedIn } from 'redux/auth/selectors';
const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return <nav>{isLoggedIn ? <></> : <NotLogged />}</nav>;
};
export default Navigation;
