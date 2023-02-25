import css from './Sheet1.module.css';
import AddingContacts from 'components/PhoneBook/AddingContacts/AddingContacts';
const sheet1 = () => {
  return (
    <div className={css.singlePage}>
      <h2>Add new Contacts</h2>
      <AddingContacts />
    </div>
  );
};

export default sheet1;
