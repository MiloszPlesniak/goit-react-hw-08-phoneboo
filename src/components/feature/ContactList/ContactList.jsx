import ListElement from 'components/feature/ListElement/ListElement';
import SearchFilter from 'components/feature/SearchFilter/SearchFilter';
import { useSelector } from 'react-redux';
import { selectContact, selectFilter, selectIsLoading } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectContact);
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
      <h2>Contact</h2>
      <SearchFilter></SearchFilter>
      {isLoading && <p>Loading...</p>}
      {isLoading === false && contacts.length === 0 ? (
        <p>Brak kontaktów</p>
      ) : (
        <ul>
          {handlefilteredContacts().map(item => (
            <ListElement key={item.id} singleContact={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
