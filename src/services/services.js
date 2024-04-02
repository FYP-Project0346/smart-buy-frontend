import axios from 'axios'

const GET_ALL_PRODUCTS_API = 'http://localhost:5000/products/get'

async function getAllProducts(
  search,
  limit = 16,
  skip = 0,
  max = 0,
  min = 0,
  sites = []
) {
  if (search == undefined) {
    search = ''
  }
  const params = {
    limit,
    skip,
    max,
    min,
    sites,
    search,
  }
  try {
    let response = await axios.get(GET_ALL_PRODUCTS_API, {
      params,
    })
    return response.data
  } catch (e) {
    alert('Could not get the data')
  }
}

async function getProductById(id) {
  try {
    const response = await axios.get('http://localhost:5000/products/getById', {
      params: {
        id: id,
      },
    })
    return response.data
  } catch (e) {
    return []
  }
}

async function saveMessage(data) {
  try {
    const response = await axios.post(
      'http://localhost:5000/contact/save',
      data
    )
    return response.status == 200
  } catch (e) {
    return false
  }
}

export default {
  getAllProducts,
  getProductById,
  saveMessage,
}
