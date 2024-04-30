import axios from 'axios'

import { 
  GET_ALL_PRODUCTS_API, 
  GET_PRODUCT_BY_ID,
  RESET_PASSWORD_API,
  SAVE_CONTACT_MSG,
  VERIFY_CODE_API,
} from './api'

async function getAllProducts(search, limit, skip, max, min, sites) {
  console.log(`Service Search ${search}`)
  console.log(`Service limit ${limit}`)
  console.log(`Service skip ${skip}`)
  console.log(`Service max ${max}`)
  console.log(`Service min ${min}`)
  console.log(`Service sites ${sites}`)
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

async function getProductById(id) {
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

async function saveMessage(data) {
  try {
    const response = await axios.post(
      SAVE_CONTACT_MSG,
      data
    )
    return response.code === 200
  } catch (e) {
    return false
  }
}

async function requestPasswordReset(email) {
  try {
    const response = await axios.post(RESET_PASSWORD_API, { email })
    return response.data
  } catch (error) {
    console.error('Error requesting password reset:', error)
    return false
  }
}

async function resetPasswordWithCode(email, code, newPassword) {
  try {
    const data = {
      email,
      code,
      newpassword: newPassword,
    }
    const response = await axios.post(VERIFY_CODE_API, data)
    return response.data.code == 200
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
