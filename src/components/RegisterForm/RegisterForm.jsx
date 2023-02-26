import { useDispatch } from 'react-redux';
import { FiLogIn } from 'react-icons/fi';
import css from './RegisterForm.module.css';

import { registerUser } from 'redux/auth/thunk';
import HomePageBook from 'components/HomePage/HomePageBook';
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
    <HomePageBook>
      <form className={css.registerForm} onSubmit={registerUserInApi}>
        <label>
          <input type="text" name="name" placeholder="NickName" />
        </label>
        <label>
          <input type="email" name="email" placeholder="e-mail" />
        </label>
        <label>
          <input type="password" name="password" placeholder="password" />
        </label>
        <button type="submit" className={css.registerForm__btn}>
          <FiLogIn />
        </button>
      </form>
    </HomePageBook>
  );
};
export default RegisterForm;
