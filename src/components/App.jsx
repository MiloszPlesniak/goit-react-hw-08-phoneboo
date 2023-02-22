import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { PrivateRoute } from '../routes/PrivateRoute';
import { RestrictedRoute } from '../routes/RestrictedRoute';

import { selectIsisRefreshing } from 'redux/auth/selectors';
import { refreshUser } from 'redux/auth/thunk';

import Layout from './Layout';
import RegisterForm from './RegisterForm/RegisterForm';
import LoginForm from './LoginForm/LoginForm';
import Book from './Book/Book';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsisRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refresging user...</p>
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterForm />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginForm />}
              />
            }
          />
          <Route
            path="contacts"
            element={<PrivateRoute redirectTo="/login" component={<Book />} />}
          />
        </Route>
      </Routes>
    </div>
  );
};
