import { useState } from 'react';
import { setToken, setUsers } from '../../services/auth';
import { login } from '../../services/login';
// import { useDispatch } from 'react-redux';
import styles from './_Login.module.scss';
// import {login} from '../../ducks/actions/actionCreators'
export const Login = ({show,handleUser,setName}) => {
  // const dispatch = useDispatch();
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

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const logged = await login(user)
    if(logged.token){
      let loggedUser = {
        username: logged.username,
        rol:logged.rol
      }
      setName(logged.username)
      setToken(logged.token)
      setUsers(loggedUser)
      handleUser()
    }
    else{
      alert('Usuario o contraseña invalidos')
    }

    }
  
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <form
          className={styles.form}
          onSubmit={(e)=> {handleSubmit(e)}}>
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
