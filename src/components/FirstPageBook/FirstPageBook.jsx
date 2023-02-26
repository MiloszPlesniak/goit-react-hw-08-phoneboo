import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { BiLogOut } from 'react-icons/bi';
import { logOut } from 'redux/auth/thunk';
import { selectUserData } from 'redux/auth/selectors';
import css from './FirstPageBook.module.css';
import AddingContacts from 'components/PhoneBook/AddingContacts/AddingContacts';
import SearchFilter from 'components/PhoneBook/SearchFilter/SearchFilter';
const FirstPageBook = () => {
  const { name } = useSelector(selectUserData);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logOut());
  };
  return (
    <div className={css.firstPageBook}>
      <h2 className={css.firstPageBookTitle}>Add new Contacts</h2>
      <AddingContacts />
      <p className={css.firstPageBookSignature}> {name} PhoneBook</p>
      <button onClick={logout} className={css.firstPageBookLogout}>
        <BiLogOut />
      </button>
      <SearchFilter/>
    </div>
  );
};

export default FirstPageBook;
