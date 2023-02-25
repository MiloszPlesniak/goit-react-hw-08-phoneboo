import { SlActionRedo } from 'react-icons/sl';
import css from './ChangePageBtn.module.css';
const ChnagePageBtn = ({ onClick, style }) => {
    const btnStyle=`${style} ${css.btn}`
  return (
    <button className={btnStyle} onClick={onClick}>
      <SlActionRedo />
    </button>
  );
};
export default ChnagePageBtn;
