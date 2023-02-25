import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/slice';
import css from './ListElement.module.css';
const ListElement = ({ singleContact }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.singleContact}>
      <span>{singleContact.name}</span>
      <span> {singleContact.number}</span>
      <button
        onClick={() => {
          dispatch(deleteContact(singleContact.id));
        }}
      >
        x
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
