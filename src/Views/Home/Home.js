import React, { useEffect , useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './_Home.module.scss';
import { Carrousel } from '../../containers/Carrousel/Carrousel';
import { CarrouselOfertas } from '../../containers/CarrouselOfertas/CarrouselOfertas';
import {Link} from 'react-router-dom'
const Home = ({product}) => {
  
  const [products,setproducts] = useState()
  console.log(product)
  const images = ['1', '2', '3', '4', '5'];

  useEffect(() => {
    let element = document.getElementById('categories');
    element
      ? element?.classList.add(`${styles.categories}`)
      : element?.classList.remove(`${styles.categories}`);
    
     
  });

  useEffect(() => {
    setproducts(product)
  },[product])

  

  return (
    <div className={styles.container}>
      {/* Navbar */}

      <div className={styles.carrousel}>
        {/* Carousel  component */}
        <CarrouselOfertas cards='1' arr={images} />
      </div>
      <span className={styles.separador}></span>

      <div className={styles.carrousel}>
        {/* Carousel  component */}
        <div className={styles.productos}>
        <h1>Productos Destacados</h1>
        <Link to='/market'>Ver todos</Link>
        </div>
        <Carrousel cards='4' arr={products} />
      </div>
      <span className={styles.separador}></span>

      <div className={styles.carrousel}>
        {/* Carousel  component */}
        
        <div className={styles.productos}>
        <h1>Subastas Destacadas</h1>
        <Link to='/market'>Ver todos</Link>
        </div>
        <Carrousel cards='4' arr={products} />
      </div>

      {/* Footer */}
    </div>
  );
};

export default Home;
