import React, { useEffect , useState } from 'react';
import { useSelector } from 'react-redux';
import style from './_Home.module.scss';
import { Carrousel } from '../../containers/Carrousel/Carrousel';
import { CarrouselOfertas } from '../../containers/CarrouselOfertas/CarrouselOfertas';

const Home = ({product}) => {
  
  const [products,setproducts] = useState()
  console.log(product)
  const images = ['1', '2', '3', '4', '5'];

  useEffect(() => {
    let element = document.getElementById('categories');
    element
      ? element?.classList.add(`${style.categories}`)
      : element?.classList.remove(`${style.categories}`);
    
     
  });

  useEffect(() => {
    setproducts(product)
  },[product])

  

  return (
    <div className={style.container}>
      {/* Navbar */}

      <div className={style.carrousel}>
        {/* Carousel  component */}
        <CarrouselOfertas cards='1' arr={images} />
      </div>
      <span className={style.separador}></span>

      <div className={style.carrousel}>
        {/* Carousel  component */}
        <h1>Productos Destacados</h1>
        <Carrousel cards='4' arr={products} />
      </div>
      <span className={style.separador}></span>

      <div className={style.carrousel}>
        {/* Carousel  component */}
        <h1>Subastas Destacadas</h1>
        <Carrousel cards='4' arr={products} />
      </div>

      {/* Footer */}
    </div>
  );
};

export default Home;
