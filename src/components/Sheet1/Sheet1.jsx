import css from './Sheet1.module.css';
import AddingContacts from 'components/PhoneBook/AddingContacts/AddingContacts';
const sheet1 = () => {
  return (
    <div className={css.singlePage}>
      <AddingContacts />
    </div>
  );
};

export default sheet1;
