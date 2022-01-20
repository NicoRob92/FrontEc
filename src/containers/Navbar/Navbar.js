import React from 'react';
import style from './_Navbar.module.scss';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import { Profile } from '../../components/Profile/Profile';

const Navbar = () => {
  return (
    <div className={style.container}>
      <h2>Nombre</h2>
      <Searchbar className={style.searchbar} />
      <Profile />
    </div>
  );
};

export default Navbar;
