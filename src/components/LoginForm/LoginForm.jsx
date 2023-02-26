import { useDispatch } from 'react-redux';
import { FiLogIn } from 'react-icons/fi';
import css from '../RegisterForm/RegisterForm.module.css';
import { loginUser } from 'redux/auth/thunk';
import HomePageBook from 'components/HomePage/HomePageBook';
const LoginForm = () => {
  const dispatch = useDispatch();

  const loginUserInApi = e => {
    e.preventDefault();
    const { email, password } = e.target;
    const loginUserData = {
      email: email.value,
      password: password.value,
    };
    e.target.reset();
    dispatch(loginUser(loginUserData));
  };

  return (
    <HomePageBook>
      <form className={css.registerForm} onSubmit={loginUserInApi}>
        <label>
          <input type="text" name="email" autoComplete="off" />
        </label>
        <label>
          <input type="password" name="password" autoComplete="off" />
        </label>
        <button className={css.registerForm__btn} type="submit">
          <FiLogIn />
        </button>
      </form>
    </HomePageBook>
  );
};
export default LoginForm;
