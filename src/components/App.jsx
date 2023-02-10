import ContactList from 'components/feature/ContactList/ContactList';
import AddingContacts from 'components/feature/AddingContacts/AddingContacts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactsSlice';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <AddingContacts />
      <ContactList />
    </div>
  );
};
