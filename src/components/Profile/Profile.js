import React , {useState} from 'react';
import style from './_Profile.module.scss';
import { useAuth0 } from '@auth0/auth0-react';
import { Login } from '../Login/Login';
import { Menu } from '../Menu/Menu';
export const Profile = () => {
  const { isAuthenticated, user } = useAuth0();
  const [show, setShow]= useState(true);
  const fShow = ()=>{    
    setShow(!show);    
  }

  return (
    <div className={style.container}>
    
        <Login/>
      
    </div>
  );
};
