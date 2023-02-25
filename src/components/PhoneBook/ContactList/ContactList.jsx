import { useSelector } from 'react-redux';

import { selectIsLoading } from 'redux/contacts/selectors';
import ListElement from 'components/PhoneBook/ListElement/ListElement';
import SearchFilter from 'components/PhoneBook/SearchFilter/SearchFilter';
import { selectFilter } from 'redux/filter/selectors';
import css from './ContactList.module.css';
const ContactList = ({ contacts }) => {
  const isLoading = useSelector(selectIsLoading);
  const { filter } = useSelector(selectFilter);

  const handlefilteredContacts = () => {
    const filtredContacts = contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filtredContacts;
  };
  return (
    <div>
      {/* <h2>Contact</h2> */}
      {/* <SearchFilter></SearchFilter> */}
      {isLoading && <p>Loading...</p>}
      {isLoading === false && contacts.length === 0 ? (
        <p>Brak kontaktów</p>
      ) : (
        <ul className={css.contactList}>
          {handlefilteredContacts().map(item => (
            <ListElement key={item.id} singleContact={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
