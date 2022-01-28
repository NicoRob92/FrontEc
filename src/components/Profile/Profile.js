import React, { useState, useEffect } from 'react';
import style from './_Profile.module.scss';
import { Login } from '../Login/Login';
import { resetLogin , isLoggedin} from '../../services/auth';

export const Profile = ({ show }) => {
  const [user, setUser] = useState(null);
  const [local, setLocal] = useState(null);
  const isLogged = isLoggedin()
 
  return (
    <div className={style.container}>
      {isLogged ? (
        <div>
          <div>{user}</div>
          <button onClick={() => resetLogin()}>Log out</button>
        </div>
      ) : (
        <Login show={show} />
      )}
    </div>
  );
};

export default Profile;
