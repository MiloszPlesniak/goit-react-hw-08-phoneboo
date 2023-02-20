import { useDispatch } from 'react-redux';

import css from './RegisterForm.module.css';
import { registerUser } from 'redux/auth/slice';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const registerUserInApi = e => {
    e.preventDefault();
    const { name, email, password } = e.target;

    const registerUserData = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    e.target.reset();
    dispatch(registerUser(registerUserData));
  };

  return (
    <form className={css.registerForm} onSubmit={registerUserInApi}>
      <label>
        <input type="text" name="name" />
      </label>
      <label>
        <input type="email" name="email" />
      </label>
      <label>
        <input type="password" name="password" />
      </label>
      <button type="submit" className={css.registerForm__btn}>
        Register
      </button>
    </form>
  );
};
export default RegisterForm;
