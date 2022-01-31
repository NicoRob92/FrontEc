import axios from 'axios'
import {api}  from '../ducks/actions/actionCreators'

export async function login(user) {
  const login = await axios.post(api+'login', user)
  return login.data
}
