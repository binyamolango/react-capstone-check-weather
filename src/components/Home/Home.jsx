import Footer from '../Footer/Footer';
import FormResult from '../FormResult/FormResult';
import Search from '../Search/Search';
import style from './Home.module.css';

const Home = () => {
  return (
    <div className={style.home}>
      <Search />
      <FormResult />
      <Footer />
    </div>
  );
};

export default Home;
