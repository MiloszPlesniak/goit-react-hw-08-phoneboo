import { useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { fetchContacts } from 'redux/contacts/slice';
import { selectContact } from 'redux/contacts/selectors';
import css from './Book.module.css';
import sheetCss from '../Sheet2/Sheet2.module.css';
import Sheet2 from '../Sheet2/Sheet2';
import Sheet1 from '../FirstPageBook/FirstPageBook';

const Book = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const generatedPage = useRef();
  const contacts = useSelector(selectContact);
  let chosePage = 0;

  const nextPage = () => {
    chosePage++;
    console.log(chosePage);
    const pageArray = Array.from(generatedPage.current.children);
    pageArray.forEach(page => {
      if (Number.parseInt(page.id) === chosePage) {
        page.classList.add(sheetCss.singlePage__changeSheetIncrement);
        page.classList.remove(sheetCss.singlePage__changeSheetDecrement);
      }
    });
  };
  const prevPage = () => {
    if (chosePage > 0) {
      chosePage = chosePage - 1;
    }
 
    const pageArray = Array.from(generatedPage.current.children);
    pageArray.forEach(page => {
      if (Number.parseInt(page.id) - 1 === chosePage) {
        console.log(page);
        page.classList.add(sheetCss.singlePage__changeSheetDecrement);
        page.classList.remove(sheetCss.singlePage__changeSheetIncrement);
      }
    });
  };

  function pageGenerator(contacts) {
    const pageArray = [];
    let number = 1;
    let sliceA = -10;
    let sliceB = 0;

    for (let i = 0; i < contacts.length / 10; i++) {
      pageArray.push(number++);
    }

    return pageArray.map(item => {
      sliceA = sliceA + 10;
      sliceB = sliceB + 10;

      return (
        <Sheet2
          key={nanoid()}
          page={item}
          contacts={contacts.slice(sliceA, sliceB)}
          nextPage={nextPage}
          prevPage={prevPage}
          lastPage={pageArray.length}
        />
      );
    });
  }

  return (
    <div className={css.bookCover}>
      
      <div ref={generatedPage} className={css.book}>
        <Sheet1 />
        {pageGenerator(contacts)}
      </div>
    </div>
  );
};
export default Book;
