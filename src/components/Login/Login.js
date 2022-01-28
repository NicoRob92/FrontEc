import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import styles from './_Login.module.scss';
// import {login} from '../../ducks/actions/actionCreators'
import axios from 'axios';
import { setToken, setUsers } from '../../services/auth';
export const Login = ({show}) => {
  // const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const logged = await axios.post('http://localhost:4000/api/login', user);
    if (logged.data.msg === ' usuario logueado') {
      setToken(logged.data.token);
      let newUser = {
        username: logged.data.username,
        rol: logged.data.rol,
      };
      setUsers(newUser);
    }
    else{
      alert(logged.data.msg)
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <form
          className={styles.form}
          onSubmit={(e) => {
            handleSubmit(e);
          }}>
          <input
            type='text'
            name='username'
            value={user.username}
            placeholder='User'
            onChange={(e) => handleChange(e)}
          />
          <input
            type='password'
            name='password'
            value={user.password}
            placeholder='Password'
            onChange={(e) => handleChange(e)}></input>
          <button className={`${styles.login}`} type='submit'>
            Log In
          </button>
        </form>
          <button className={`${styles.login}`} onClick={show}>
            Close
          </button>
      </div>
    </div>
  );
};
