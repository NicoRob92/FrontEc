import React, {useState} from 'react';
import style from './_Navbar.module.scss';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import { Profile } from '../../components/Profile/Profile';
import Cart from '../../components/Cart/Cart';

const Navbar = () => {
  const [showCart, setShowCart]= useState(false)

  return (
    <div className={style.container}>
      <h2>Nombre</h2>
      <Searchbar className={style.searchbar} />
      <Profile />
      <button onClick={()=>setShowCart(!showCart)}>Cart</button>
      <Cart showCart={showCart} setShowCart={setShowCart}/>
    </div>
  );
};

export default Navbar;
