import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './_Home.module.scss';
import { Carrousel } from '../../containers/Carrousel/Carrousel';
import { CarrouselOfertas } from '../../containers/CarrouselOfertas/CarrouselOfertas';
import Categories from '../../containers/Categories/Categories';
import faker from 'faker';

const Home = () => {
  let categories = [
    'Hogar',
    'Tecnologia',
    'Computacion',
    'Electrodomesticos',
    'Indumentaria & calzado',
    'Automotor',
  ];

  const array = [];
  let i = 1;
  while (i <= 20) {
    array.push({
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.image(350,350,true),
    });
    i++;
  }

  const images = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  useEffect(() => {
    let element = document.getElementById('categories');
    console.log(element);
    element
      ? element?.classList.add(`${style.categories}`)
      : element?.classList.remove(`${style.categories}`);
  });

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
        <Carrousel cards='4' arr={array} />
      </div>
      <span className={style.separador}></span>

      <div className={style.carrousel}>
        {/* Carousel  component */}
        <h1>Subastas Destacadas</h1>
        <Carrousel cards='4' arr={array} />
      </div>

      {/* Footer */}
    </div>
  );
};

export default Home;
