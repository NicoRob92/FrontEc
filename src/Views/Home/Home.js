import { Link } from 'react-router-dom';
import style from './_Home.module.scss';
import { Carrousel } from '../../containers/Carrousel/Carrousel';
const Home = () => {
  return (
    <div className={style.container}>
      {/* Navbar */}

      <div>
        {/* Carousel  component */}
        <Carrousel/>
      </div>

      <div>
        {/* posts */}
        <Link to={'/cardid'}>
          <h4>Card</h4>
        </Link>
      </div>

      {/* Footer */}
    </div>
  );
};

export default Home;
