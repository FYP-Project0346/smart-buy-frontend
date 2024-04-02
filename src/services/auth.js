import axios from 'axios'
import { setLoginInfo } from './cookies'

const registerEndPoint = 'http://localhost:5000/auth/register'
const loginEndPoint = 'http://localhost:5000/auth/login'

export const register = async (data) => {
  try {
    console.log(data)
    await axios.post(registerEndPoint, data)
    const response = await login(data.email, data.password, true)
    return response
  } catch (error) {
    console.log("Can't register")
    return false
  }
}

export const login = async (email, password, remember) => {
  try {
    const response = await axios.post(loginEndPoint, {
      username: email,
      password,
    })

    if (response.data.code === 200) {
      let token = response.data.token
      let email = response.data.email
      if (remember) {
        setLoginInfo(email, token)
      }
      return true
    } else {
      return false
    }
  } catch (error) {
    console.log("Can't Login")
    return false
  }
}
