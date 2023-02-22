import { useDispatch } from 'react-redux';
import css from './LoginForm.module.css';
import { loginUser } from 'redux/auth/thunk';
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
    <form className={css.loginForm} onSubmit={loginUserInApi}>
      <label>
        <input type="text" name="email" />
      </label>
      <label>
        <input type="password" name="password" />
      </label>
      <button className={css.loginForm__btn} type="submit">
        Log in
      </button>
    </form>
  );
};
export default LoginForm;
