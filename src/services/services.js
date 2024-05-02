import axios from 'axios'

import { 
  GET_ALL_PRODUCTS_API, 
  GET_PRODUCT_BY_ID,
  RESET_PASSWORD_API,
  SAVE_CONTACT_MSG,
  VERIFY_CODE_API,
} from './api'

const  getAllProducts = async (search, limit, skip, max, min, sites) =>{
  if (search === undefined) {
    search = ''
  }
  const params = {
    limit,
    skip,
    max,
    min,
    sites: JSON.stringify(sites),
    search,
  }
  try {
    let response = await axios.get(GET_ALL_PRODUCTS_API, {
      params,
    })
    console.log(response.data.data)
    return response.data.data
  } catch (e) {
    alert('Could not get the data')
  }
}

const getProductById = async (id)=> {
  try {
    const response = await axios.get(GET_PRODUCT_BY_ID, {
      params: {
        id: id,
      },
    })
    return response.data.data
  } catch (e) {
    return []
  }
}

const saveMessage = async (data) => {
  try {
    const response = await axios.post(
      SAVE_CONTACT_MSG,
      data
    )
    console.log(response)
    return response.data.code === 200
  } catch (e) {
    return false
  }
}

const requestPasswordReset = async (email) => {
  try {
    const response = await axios.post(RESET_PASSWORD_API, { email })
    return response.data
  } catch (error) {
    console.error('Error requesting password reset:', error)
    return false
  }
}

const resetPasswordWithCode = async (email, code, newPassword)=> {
  try {
    const data = {
      email,
      code,
      newpassword: newPassword,
    }
    const response = await axios.post(VERIFY_CODE_API, data)
    return response.data.code === 200
  } catch (error) {
    console.error('Error resetting password:', error)
    return false
  }
}

export default {
  getAllProducts,
  getProductById,
  saveMessage,
  requestPasswordReset,
  resetPasswordWithCode,
}
