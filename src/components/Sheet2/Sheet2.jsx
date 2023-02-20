import clsx from 'clsx';
import css from './Sheet2.module.css';
import ContactList from 'components/feature/PhoneBook/ContactList/ContactList';
const sheet2 = ({
  handleNextPage,
  handlePrevPage,
  chosePage,
  page,
  contacts,
}) => {
  return (
    <div
      style={{
        zIndex: page - page - page,
      }}
      className={
        chosePage >= page
          ? clsx(css.singlePage, css.singlePage__changeSheetIncrement)
          : clsx(css.singlePage)
      }
    >
      <ContactList contacts={contacts} />
      <p>{page}</p>
      <button
        onClick={() => {
          handlePrevPage(1);
        }}
      >
        prev
      </button>
      <button
        onClick={() => {
          handleNextPage(1);
        }}
      >
        next
      </button>
    </div>
  );
};

export default sheet2;
