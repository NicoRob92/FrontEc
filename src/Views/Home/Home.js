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
      image: faker.image.people(),
    });
    i++;
  }

  const images = [];
  let x = 1;
  while (x <= 20) {
    images.push(faker.image.animals())
    x++;
  }


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
        <Carrousel cards='4' arr={array} />
      </div>
      <div>
        {/* posts */}
        <Categories categories={categories} />
      </div>

      {/* Footer */}
    </div>
  );
};

export default Home;
