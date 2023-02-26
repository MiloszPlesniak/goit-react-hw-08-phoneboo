import { changefilter } from 'redux/filter/slice';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import css from './SearchFilter.module.css';
const SearchFilter = () => {
  const dispatch = useDispatch();
  const input = useRef(null);
  return (
    <input
      className={css.input}
      ref={input}
      type="text"
      name="Search"
      onChange={() => {
        dispatch(changefilter(input.current.value));
      }}
      placeholder="Search"
    />
  );
};

export default SearchFilter;
