import css from './HomePageBook.module.css';

const HomePageBook = ({ children }) => {
  return (
    <div className={css.homePage}>
      <h2 className={css.homePageTitle}>PhoneBook</h2>
          {children}
          <p className={css.homePageSignature}>by KonceptXIX</p>
    </div>
  );
};
export default HomePageBook;
