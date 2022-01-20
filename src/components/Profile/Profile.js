import React , {useState} from 'react';
import style from './_Profile.module.scss';
import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton } from '../Login/Login';
import { Menu } from '../Menu/Menu';
export const Profile = () => {
  const { isAuthenticated, user } = useAuth0();
  const [show, setShow]= useState(true);
  const fShow = ()=>{    
    setShow(!show);    
  }

  return (
    <div className={style.container}>
      {isAuthenticated ? (
        <div className={style.profile}>
          <button
            className={style.pic}
             style={{backgroundImage: `url(${user.picture})` }} 
            onClick={fShow}
          />
          <Menu user= {user} show={show}/>
        </div>
      ) : (
        <LoginButton />
      )}
    </div>
  );
};
