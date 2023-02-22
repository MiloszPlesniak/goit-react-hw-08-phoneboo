import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/slice';

const ListElement = ({ singleContact }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <span>{singleContact.name}</span>
      <span> {singleContact.number}</span>
      <button
        onClick={() => {
          dispatch(deleteContact(singleContact.id));
        }}
      >
        Delete
      </button>
    </li>
  );
};

ListElement.propTypes = {
  singleContact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
};
export default ListElement;
