import React from 'react';
import { Logout } from '../Login/Logout';
import style from './_Menu.module.scss';

export const Menu = ({ user, show }) => {
  const menu = document.getElementById('menu');
  menu && show
    ? menu?.classList.add(`${style.visible}`)
    : menu?.classList.remove(`${style.visible}`);

  const handleClose = ()=>{
    menu?.classList.remove(`${style.visible}`);
  }
  return (
    <div className={style.menu} id='menu' >
      <h5> {user.name} </h5>
      <h6>Perfil</h6>
      <h6>Post</h6>
      <h6>Compras</h6>
      <h6>Ventas</h6>
      <h6>Ayuda</h6>
      <button onClick={() => handleClose()}>close</button>
      <Logout />
    </div>
  );
};
