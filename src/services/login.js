import axios from 'axios'

export async function UserLogin(user) {
  const login = await axios.post('https://api-ec.herokuapp.com/api/login', user)
  console.log(login.data)
  if(login.data.msg === 'usuario logueado'){
    localStorage.setItem('logged', true)
    return login.data
  }else{
    localStorage.setItem('logged', false)
  }
}
