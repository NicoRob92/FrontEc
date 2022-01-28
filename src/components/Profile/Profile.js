import React, { useState, useEffect } from 'react';
import style from './_Profile.module.scss';
import { Login } from '../Login/Login';
import { resetLogin , setUsers , setToken} from '../../services/auth';
import {login} from '../../services/login'
import axios from 'axios'

export const Profile = ({ show }) => {
  const [user, setUser] = useState(false);
  const [name,setName] = useState(localStorage.getItem('username'));
  const handleUser = () => {
    setUser(!user)
  }

  const handleLogOut = (e) => {
    e.preventDefault()
    resetLogin();
    show()
  }

  return (
    <div className={style.container}>
      {user === true ? (
        <div>
          <div>{name}</div>
          <button onClick={(e) => handleLogOut(e)}>Log out</button>
        </div>
      ) : (
        <Login show={show} handleUser={handleUser} setName={setName}/>
      )}
    </div>
  );
};

export default Profile;
