import axios from 'axios'

export async function login(user) {
  const login = await axios.post('http://localhost:4000/api/login', user)
  return login.data
}
