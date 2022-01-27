
import React , {useState} from 'react';
import style from './_Profile.module.scss';
import { Login } from '../Login/Login';

export const Profile = () => {
  const { isAuthenticated, user } = useAuth0();
  const [show, setShow] = useState(true);
  const fShow = () => {
    setShow(!show);
  };

  return (
    <div className={style.container}> 
        <Login/>   
    </div>
  );
};

export default Profile;
