import css from './Sheet1.module.css';
import AddingContacts from 'components/feature/PhoneBook/AddingContacts/AddingContacts';
const sheet1 = () => {
  
  return (
    <div className={css.singlePage}>
      <AddingContacts />
    </div>
  );
};

export default sheet1;
