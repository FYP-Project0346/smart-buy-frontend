import axios from 'axios'
import { setLoginInfo, clearoutCookies, getLoginInfo } from './cookies'


const registerEndPoint = 'http://localhost:5000/auth/register'
const loginEndPoint = 'http://localhost:5000/auth/login'
const VERIFY_TOKEN = 'http://localhost:5000/auth/verify_token'
const GET_USER_DATA = "http://localhost:5000/user"

export const register = async (data) => {
  try {
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

    if (response.data.code == 200) {
      const data = response.data
      if (remember) {
        setLoginInfo(data.email, data.token)
      }
      return data
    } else {
      return false
    }
  } catch (error) {
    console.log("Can't Login")
    return false
  }
}

export async function autologin(){
  try{
    const {email, token} = getLoginInfo()
    const response = await axios.get(GET_USER_DATA, {
      params:{
        email
      },
      headers:{
        authorization: `Barrier: ${token}`
      }
    })
    if(response.status === 200){
      if (response.data.code == 200){
        const data2 = response.data.data
        let data = {
          type: "user",
          id: data2._id,
          firstname: data2.firstname,
          lastname: data2.lastname,
          email: data2.email,
          token: token,
        }
        return data;
      }else if (response.data.code == 204){
        return false
      } 
    }
    else{
      // TODO: Need to have a good message here and show it to user.
      console.log("Check your internet connection")
      return false
    }
  }catch(e){

  }

  

}
