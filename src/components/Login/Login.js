import { useState } from 'react';
import { setToken, setUsers } from '../../services/auth';
import { login } from '../../services/login';
import styles from './_Login.module.scss';
export const Login = ({ show, handleUser, setName }) => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const logged = await login(user);
    if (logged.token) {
      let loggedUser = {
        username: logged.username,
        rol: logged.rol,
      };
      setName(logged.username);
      setToken(logged.token);
      setUsers(loggedUser);
      handleUser();
    } else {
      alert('Wrong username o password');
    }
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
          x
        </button>
      </div>
    </div>
  );
};
