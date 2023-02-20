import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { fetchContacts } from 'redux/contacts/slice';
import { selectContact } from 'redux/contacts/selectors';
import css from './Book.module.css';
import Sheet2 from '../Sheet2/Sheet2';
import Sheet1 from '../Sheet1/Sheet1';
const Book = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const [chosePage, setchosePage] = useState(0);
  const contacts = useSelector(selectContact);

  const nextPage = value => {
    setchosePage(chosePage + value);
  };
  const prevPage = value => {
    setchosePage(chosePage - value);
  };

  function pageGenerator(contacts) {
    const pageArray = [];
    let number = 1;
    let sliceA = -8;
    let sliceB = 0;
    
    for (let i = 0; i < contacts.length / 8; i++) {
      pageArray.push(number++);
    }

    return pageArray.map(item => {
      sliceA = sliceA + 8;
      sliceB = sliceB + 8;
      
      return (
        <Sheet2
          key={nanoid()}
          // zIndex={zIndex}
          chosePage={chosePage}
          page={item}
          contacts={contacts.slice(sliceA, sliceB)}
          handleNextPage={nextPage}
          handlePrevPage={prevPage}
        />
      );
    });
  }

  return (
    <div className={css.book}>
      <Sheet1 />

      {pageGenerator(contacts)}
    </div>
  );
};
export default Book;
